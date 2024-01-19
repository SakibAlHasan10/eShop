import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
        <div >
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
        </div>
    );
};

export default Navbar;