import React from "react";
import { NewWindowIcon, PlayIcon } from "./Icons";

const Viñeta = () => (
  <div className="bg-secondary  min-h-1 min-w-1 redondo relative top-2"> </div>
);

const Divider = () => (
  <div className="border-t-1  w-full border-[#3A3A3A]"></div>
);

const Content = () => {
  return (
    <section className="my-7">
      <div
        id="word-container"
        className="flex justify-between items-center ">
        <div
          id="word-textAndSound "
          className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Keyboard</h1>
          <span className="text-secondary">/&apos;ki:bc:d&apos;/</span>
        </div>
        <div id="word-audioIcon">
          <PlayIcon />
        </div>
      </div>

      <div
        id="type"
        className="flex my-5 justify-between gap-4 items-center ">
        <span className="italic font-bold">noun</span>
        <Divider/>
      </div>

      <div clas="meaning">
        <span className="text-[#757575]">Meaning</span>
        <div className="meanings my-4">
          <div className="flex  gap-4 justify-center items-start  w-full mb-3 ">
            <Viñeta />
            <div>
              (etc.) A set of keys used to operate a typewriter, computer etc.
            </div>
          </div>
          <div className="flex  gap-4 justify-center items-start  w-full mb-3 ">
            <Viñeta />
            <div>
              A component of many instruments including the piano, organ, and
              harpsichord consisting of usually black and white keys that cause
              different tones to be produced when struck.
            </div>
          </div>
          <div className="flex  gap-4 justify-center items-start  w-full mb-3 ">
            <Viñeta />
            <div>
              A device with keys of a musical keyboard, used to control
              electronic sound-producing devices which may be built into or
              separate from the keyboard device.
            </div>
          </div>
        </div>

        <div className="flex w-full gap-6">
          <span className="text-[#757575]">Synonyms</span>

          <span className="text-secondary font-bold">electronic keyboard</span>
        </div>
      </div>

      <div
        id="verb"
        className="flex my-5 justify-between gap-4 items-center ">
        <span className="italic font-bold">Verb</span>
        <Divider/>
      </div>

      <div className="meaning mb-6">
        <span className="text-[#757575]">Meaning</span>
        <div className="meanings my-4">
          <div className="flex  gap-4 items-start  w-full mb-3 ">
            <Viñeta />
            <div>To type on a computer keyboard.</div>
          </div>
          <span className="ml-4 inline-block">
            “Keyboarding is the part of this job I hate the most.”
          </span>
        </div>
      </div>

      <Divider/>

      <div className="my-6 flex flex-col gap-1">
        <span className="text-[#757575] underline text-sm inline-block">Source</span>
        <span className=" flex gap-2 items-center">https://en.wiktionary.org/wiki/keyboard <NewWindowIcon/> </span>
      </div>
    </section>
  );
};

export default Content;
