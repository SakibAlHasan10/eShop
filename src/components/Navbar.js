import Link from "next/link";
import React from "react";
import PageSize from "./PageSize";

const Navbar = () => {
  return (
    <div>
      <PageSize>
        <div className="flex justify-between items-center">
          <div>
            <h2>eShop</h2>
            {/* <Image src={""} alt='logo'></Image> */}
          </div>
          <div>
            <Link href={"/"}>
              <button>Home</button>
            </Link>
            <Link href={"/saved"}>
              <button>Saved</button>
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
