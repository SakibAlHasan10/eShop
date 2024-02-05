import Link from "next/link";
import React from "react";
import PageSize from "./PageSize";

const TopNavbar = () => {
  return (
    <PageSize>
      <div className="flex items-center justify-between my-2 text-xs text- font-medium ">
        <div className="flex items-center gap-5">
            <div>

          Hi! <Link href={"signin"} className="text-blue-600 underline">Sign In</Link>
          <span className="mx-2">or</span>
          
          <Link href={"register"} className="text-blue-600 underline">Register</Link>
            </div>
          <Link className="hover:underline" href={"register"}>Daily Deals</Link>
          <Link className="hover:underline" href={"register"}>Brand Outlet</Link>
          <Link className="hover:underline" href={"register"}>Gift Cards</Link>
          <Link className="hover:underline" href={"register"}>Help & Contact</Link>
        </div>
        <div className="flex items-center gap-5">
          <Link className="hover:underline" href={""}>Sell</Link>
          <Link href={""}>Watchlist</Link>
          <Link href={""}>My eShop</Link>
        </div>
      </div>
    </PageSize>
  );
};

export default TopNavbar;
