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
                <button className="text-sm hover:text-blue-500 mr-3 text-right">Short by Category</button>
                </div>
                <div className="flex w-full">

                <input
                  className="border-2 border-black px-3 text-base w-9/12 h-10"
                  placeholder="Search for anything"
                />
                <select className="mb-6 text-xs h-9">
                  <option>All Categories</option>
                  <option>B</option>
                  <option>C</option>
                </select>
                </div>

                <button className="w-[200px] ml-20 bg-blue-700 h-10 text-white">
                  Search
                </button>
            </div>
            <div>
              <p className="text-xs hover:text-blue-500">Advanced</p>
            </div>
          </div>
        </div>
      </PageSize>
    </div>
  );
};

export default SearchBar;
