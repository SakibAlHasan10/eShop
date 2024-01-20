import Link from "next/link";
import React from "react";
import PageSize from "./PageSize";
const navs=["Home","Saved","Motors",
"Electronics",
"Collectibles",
"Home & Garden",
"Fashion",
"Toys",
"Sporting Goods",
"Business & Industrial",
"Jewelry & Watches",
"eShop Live", "Refurbished" ]
const Navbar = () => {
  return (
    <div>
      <PageSize>
        <div className="flex items-center justify-between text-sm my-4">
          {
            navs?.map(nav=><Link key={nav} href={`/${nav}`} className="hover:border-x px-2 border-black "><button className="hover:text-blue-500 hover:underline">{nav}</button></Link>)
          }
        </div>
        {/* <div className="my-3">
          <div className="flex items-center justify-between gap-5">
            <Link href={"/"}>
              <button>Home</button>
            </Link>
            <Link href={"/saved"}>
              <button>Saved</button>
            </Link>
            <Link href={"/electronics"}>
              <button>Motors</button>
            </Link>
            <Link href={"/electronics"}>
              <button>Electronics</button>
            </Link>
            <Link href={"/electronics"}>
              <button>Collectibles</button>
            </Link>
            <Link href={"/electronics"}>
              <button>Home & Garden</button>
            </Link>
            <Link href={"/electronics"}>
              <button>Fashion</button>
            </Link>
          </div>
        </div> */}
      </PageSize>
    </div>
  );
};

export default Navbar;
