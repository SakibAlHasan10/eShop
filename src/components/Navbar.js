import Link from "next/link";
import React from "react";
import PageSize from "./PageSize";

const Navbar = () => {
  return (
    <div>
      <PageSize>
        <div className="my-3">
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
          </div>
        </div>
      </PageSize>
    </div>
  );
};

export default Navbar;
