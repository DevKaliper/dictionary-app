
"use client"

import { NewWindowIcon, PlayIcon } from "./Icons";

const Viñeta = () => (
  <div className="bg-secondary  min-h-1 min-w-1 redondo relative top-2"> </div>
);

const Divider = () => (
  <div className="border-t-1 my-4 w-full border-[#3A3A3A]"></div>
);

const Content = ({word}) => { 

  if (!word) return <h1 className="text-3xl md:text-5xl font-bold my-5">No Definitions Found</h1>

  return (
    <section className="my-7">

     
      <div
        id="word-container"
        className="flex justify-between items-center ">
        <div
          id="word-textAndSound "
          className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-5xl font-bold">{word.word}</h1>
          <span className="text-secondary md:text-xl lg:text-2xl">{word.phonetic}</span>
        </div>
        <div id="word-audioIcon">
          <PlayIcon />
        </div>
      </div>

      {word.meanings?.map((m, i) => (
        <section key={i}>
          <div className="flex my-5 justify-between gap-4 items-center ">
            <span className="italic
            md:text-lg lg:text-2xl font-bold">{m.partOfSpeech}</span>
            <Divider />
          </div>

          <div clas="meaning">
            <span className="text-[#757575] md:text-lg lg:text-2xl ">Meaning</span>
            <div className="meanings my-4">
              {m.definitions?.slice(0, 3).map((d, i) => (
                <div key={i}>
                  <div className="flex  gap-4 justify-start items-start  w-full mb-3 ">
                    <Viñeta />
                    <div className="md:text-xl lg:text-2xl">{d.definition}</div>
                  </div>
                  {d.example && (
                    <span className="ml-4 md:text-lg lg:text-2xl mb-4 inline-block italic">
                      Example: {d.example}
                    </span>
                  )}
                </div>
              ))}
            </div>
            {m.synonyms.length != 0 && (
              <div className="flex w-full my-3 gap-x-6 flex-wrap">
                <span className="text-[#757575] md:text-lg lg:text-2xl">Synonyms</span>
                {m.synonyms.slice(0, 3).map((s, i) => (
                  <span
                    key={i}
                    className="text-secondary md:text-lg lg:text-2xl font-bold">
                    {s}
                  </span>
                ))}
              </div>
            )}
            {m.antonyms.length != 0 && (
              <div className="flex w-full  my-3 gap-x-6 flex-wrap">
                <span className="text-[#757575] md:text-lg lg:text-2xl">Antonyms</span>
                {m.antonyms.map((a, i) => (
                  <span
                    key={i}
                    className="text-secondary md:text-lg lg:text-2xl font-bold">
                    {a}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      <Divider />

      <div className="my-6 flex flex-col gap-1">
        <span className="text-[#757575] md:text-lg lg:text-2xl underline text-sm inline-block">
          Source
        </span>
        <span className=" flex gap-2 items-center md:text-lg lg:text-2xl">
          {word.sourceUrls.length === 1 ? word.sourceUrls : word.sourceUrls[0]} <NewWindowIcon />{" "}
        </span>
      </div>
    </section>
  );
};

export default Content;
