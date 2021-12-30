import React from "react";

// Core nextjs
import { useRouter } from 'next/router'

// components

import IndexNavbar from "components/Navbars/IndexNavbar";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

export default function Admin({ children }) {
  const router = useRouter()
  return (
    <>
      <div className="relative bg-blueGray-100">
        <IndexNavbar pathName={router.pathname} />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
