import React, { useEffect, useState } from "react";
// components
import CardTable from "components/Cards/CardTable.js";
// layout for page
import Admin from "layouts/Admin.js";
// API
import {getDashboard} from 'apis/Auth'

function Dashboard({users, wins}) {
  const [currentPeople, setCurrentPeople] = useState(users)
  // Thay doi danh sach khi SSR thay doi
  useEffect(() => {
    setCurrentPeople(users)
  }, [users])

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable users={currentPeople} wins={wins} />
        </div>
      </div>
    </>
  );
}

Dashboard.layout = Admin;

export default Dashboard

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getServerSideProps(ctx) {
  // Route truoc do de redirect ve khi SSR loi
  const redirectBack = ctx.req?ctx.req.headers.referer:false
  // Token neu co
  const token = ctx.req?ctx.req.headers.cookie:false
  // Back to login page neu token trong cookie ko con gia tri
  if(!token||!redirectBack){
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    }
  }
  // Fetching data phia BACKEND
  try {
    const {data, statusText} = await getDashboard(token)
                        .then(res => {
                          return {data: res, statusText: res.statusText}
                        })
                        .catch(err => console.log(err))
    const datasSSR = await data.json()
    // By returning { props: { datasSSR } }
    if(datasSSR && !datasSSR.error)
      return {
        props: {
          users: datasSSR.datas.load_users,
          wins: datasSSR.datas.wins,
        },
      }
    // Back to login-page
    if(statusText==="Unauthorized" || statusText === "Too Many Requests")
      return {
        redirect: {
          destination: "/auth/login",
          permanent: false,
        },
      }
    // Back to pre-page
    else
      return {
        redirect: {
          destination: redirectBack,
          permanent: false,
        },
      }
  } catch (error) {
    // Back to login-page
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    }
  }
}
