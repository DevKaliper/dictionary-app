
"use client"
import Content from "@/components/Content";
import { InputSearch } from "@/components/InputSearch";
import { createContext, useState } from "react";
import  {test}  from "@/Mock/keyboard";

const Home = () => {
  const [word, setWord] = useState(test)
  console.log(word);
  return (
    <>
      <main>
        
          <InputSearch setWord={setWord} />
          <Content word={word[0]} />
       
      </main>
    </>
  );
};

export default Home;
