import React from "react";
// Fetch
import fetch from "node-fetch"
// components
import CardTable from "components/Cards/CardTable.js";
import CardNotification from "components/Cards/CardNotification.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Dashboard({notification, users, wins}) {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable users={users} wins={wins} />
        </div>
        <div className="w-full mb-12 px-4">
          <CardNotification color="dark" notification={notification} wins={wins}/>
        </div>
      </div>
    </>
  );
}

Dashboard.layout = Admin;

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Fetching data phia BACKEND
  try {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const {data, statusText} = await fetch(process.env.NEXT_PUBLIC_END_POINT_DASHBOARD)
                        .then(res => {
                          return {data: res, statusText: res.statusText}
                        })
                        .catch(err => console.log(err))
    const datasSSR = await data.json()
    // By returning { props: { datasSSR } }
    if(datasSSR && !datasSSR.error)
      return {
        props: {
          notification: datasSSR.datas.notification,
          users: datasSSR.datas.load_users,
          wins: datasSSR.datas.wins,
        },
      }
    // Back to pre-page
    else
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      }
  } catch (error) {
    console.log(error)
    // Back to login-page
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }
}
