import React from "react";
// Fetch
import fetch from "node-fetch"
// components
import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
// layout for page
import Admin from "layouts/Admin.js";
// Validate
import {isNumber} from "general/validate/commonValiate"

export default function Settings({user}) {
  console.log(user)
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}

Settings.layout = Admin;

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getServerSideProps(context) {
  const id = context.query.id
  // Back to HOME if id undefined
  const isID = isNumber("userId", id)
  if(isID){
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }
  // Fetching data phia BACKEND
  try {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const {data, statusText} = await fetch(process.env.NEXT_PUBLIC_USER + id)
                        .then(res => {
                          return {data: res, statusText: res.statusText}
                        })
                        .catch(err => console.log(err))
    const datasSSR = await data.json()
    // By returning { props: { datasSSR } }
    if(datasSSR && !datasSSR.error)
      return {
        props: {
          user: datasSSR.datas,
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