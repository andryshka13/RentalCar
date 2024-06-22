"use client";

import Image from "next/image";
import React, { useState } from "react";

import SearchList from "./SearchList";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = ({
  setManufacturer,
}: {
  setManufacturer: (searchManufacturer: string) => void;
}) => {
  const [searchManufacturer, setSearchManuFacturer] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer.trim() === "") {
      return alert("Please provide some input");
    }

    setManufacturer(searchManufacturer);
  };

  const onKeyEnterDown = (e: any) => {
    if (e.key === "Enter" && searchManufacturer != "") {
      setManufacturer(searchManufacturer);
    }
  };

  return (
    <form
      className="searchbar"
      onSubmit={handleSearch}
      onKeyDown={onKeyEnterDown}
    >
      <div className="searchbar__item">
        <SearchList
          selected={searchManufacturer}
          setSelected={setSearchManuFacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>

      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
