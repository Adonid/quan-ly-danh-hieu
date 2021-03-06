import React from "react";
import { randomBackground } from "general/helper/randomImage";
// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats({users, wins}) {
  // Tinh toan so lieu thong ke khi users thay doi
  const statistical = React.useMemo(() => {
    const userAmount = users.length
    const userIsToQuota = users.filter(item => item.to_quota).length
    const userNotToQuota = users.filter(item => !item.to_quota).length
    let totalWins = 0
    users.forEach(user => {
      const wined = wins.filter(win => win.quota <= user.win.quota).length
      totalWins = totalWins + wined - 1
    })
    return {userAmount, userIsToQuota, userNotToQuota, totalWins}
  }, [users])
  return (
    <>
      {/* Header */}
      <div className={"relative md:pt-32 pb-32 pt-12 "+`bg-[url('${randomBackground}')]`}>
        <div className="px-0 md:px-6 lg:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="THÀNH VIÊN QUẢN LÝ"
                  statTitle={statistical.userAmount}
                  statPercentColor="text-emerald-500"
                  statIconName="fas fa-users"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="ĐỦ ĐIỀU KIỆN NHẬN DH"
                  statTitle={statistical.userIsToQuota}
                  statPercentColor="text-red-500"
                  statIconName="far fa-calendar-check"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="CHỜ TỚI HẠN NHẬN DH"
                  statTitle={statistical.userNotToQuota}
                  statPercentColor="text-orange-500"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TỔNG LƯỢT TRAO TẶNG DH"
                  statTitle={statistical.totalWins}
                  statPercentColor="text-emerald-500"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
