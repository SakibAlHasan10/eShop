import React from "react";
import PageSize from "./PageSize";

const SearchBar = () => {
  return (
    <div>
      <PageSize>
        <div className="my-3">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-4xl font-bold">
                <span className="text-[green]">e</span>
                <span className="text-[blue]">S</span>
                <span className="text-[red]">h</span>
                <span className="text-[black]">o</span>
                <span className="text-[orange]">p</span>
              </h2>
              {/* <Image src={""} alt='logo'></Image> */}
            </div>
            <div className="w-10/12 flex">
              <div>
                <p>Short by Category</p>
                </div>
              {/* <div className="flex-row"> */}
                <input
                  className="border-2 border-black px-3 text-base w-9/12 h-10"
                  placeholder="Search for anything"
                />
                <button className="w-[200px] ml-2 bg-blue-700 h-10 text-white">
                  Search
                </button>
              {/* </div> */}
            </div>
            <div>
              <p>Advanced</p>
            </div>
          </div>
        </div>
      </PageSize>
    </div>
  );
};

export default SearchBar;
