import React from "react";
import { randomBackground } from "general/helper/randomImage";
// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats({users}) {
  // Tinh toan so lieu thong ke khi users thay doi
  const statistical = React.useMemo(() => {
    const userAmount = users.length
    const userIsToQuota = users.filter(item => item.to_quota).length
    return {userAmount, userIsToQuota}
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
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-users"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="ĐỦ ĐIỀU KIỆN NHẬN DH"
                  statTitle={statistical.userIsToQuota}
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="far fa-calendar-check"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="QÚA HẠN NHẬN DH"
                  statTitle={26}
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="LƯỢT TRAO TẶNG"
                  statTitle={109}
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
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
