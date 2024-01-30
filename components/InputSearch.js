
"use client"

import  { useState } from "react";
import { SearchIcon } from "./Icons";
import { getWord } from "@/Hooks/useSearchWord";

export const InputSearch = ({setWord}) => {
  const [searchWord, setSearchWord] = useState("")
  
  const handleSubmit = async (e) => {
    e.preventDefault() 
    console.log(searchWord);
    const data = await getWord(searchWord)
    console.log(data);
    setWord(data)  
  }

  return (
    <div className="h-fit w-full flex justify-center items-center pt-4 ">
      <form onSubmit={handleSubmit} className="w-full mt-4 relative flex justify-center items-center">
        <input
          type="text"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          className=" h-12 pl-4 rounded-2xl w-full"
          placeholder="keyboard"
        />
        <button  className="absolute right-3"><SearchIcon/></button>
      </form>
    </div>
  );
};
