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
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
          </div>
        </div>
      </PageSize>
    </div>
  );
};

export default SearchBar;
