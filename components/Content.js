import React from "react";
import { PlayIcon } from "./Icons";

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
          <span className="">/&apos;ki:bc:d&apos;/</span>
        </div>
        <div id="word-audioIcon">
          <PlayIcon />
        </div>
      </div>
    </section>
  );
};

export default Content;
