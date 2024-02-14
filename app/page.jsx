
"use client"
import Content from "@/components/Content";
import { Inter } from 'next/font/google'
import { Lora } from 'next/font/google'
import { Inconsolata } from 'next/font/google'
import { InputSearch } from "@/components/InputSearch";
import {  useState } from "react";
import Header from "@/components/Header"
import  {test}  from "@/Mock/keyboard";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] })
const lora = Lora({ subsets: ['latin'] })
const inconsolata = Inconsolata({ subsets: ['latin'] })


const Home = () => {

  const [word, setWord] = useState(test)
  const [type, setType] = useState("Sans Serif");
  const types = [
    {
      key: "Inter",
      label: "Sans Serif",
    },
    {
      key: "Lora",
      label: "Serif",
    },
    {
      key: "Inconsolata",
      label: "Mono",
    },
  ];

  console.log(word);
  return (
    <>
      <main className={`${type === "Serif" ? lora.className : type === "Mono" ? inconsolata.className : inter.className  }`}>
      <Header type={type} types={types} setType={setType}/>
          <InputSearch setWord={setWord} />
          <Content word={word[0]} />
          <Footer/>
       
      </main>
    </>
  );
};
    

export default Home;
