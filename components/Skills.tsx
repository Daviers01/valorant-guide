"use client";

import { useState } from "react";
import Image from "next/image";
import VideoPlayer from "./VideoPlayer";

const Skills = (props: any) => {
  const { agent } = props;
  const [selectedSkill, setSelectedSkill] = useState(0);
  const numkey = ["Q", "E", "C", "X"];

  const videoUrl =
    agent.abilities[selectedSkill].ability_video[0].video.file.url;

  return (
    <>
      <div className="mt-4 grid grid-cols-4 gap-4">
        {agent.abilities.map((ability: any, index: number) => {
          return (
            <div
              key={ability.name + index}
              className="group"
              onClick={() => {
                console.log(index);
                setSelectedSkill(index);
              }}
            >
              <div className="p-4 cursor-pointer bg-transparent border-2 border-solid border-white border-opacity-10 hover:bg-red">
                <Image
                  className="mx-auto"
                  src={ability.ability_icon.url}
                  alt=""
                  width={35}
                  height={35}
                />
              </div>
              <div className="bg-gray-700 mt-2 h-8 w-8 mx-auto text-gray-100 flex justify-center items-center rounded-lg keys">
                {numkey[index]}
              </div>
            </div>
          );
        })}
      </div>

      <VideoPlayer key={videoUrl} src={videoUrl} />
    </>
  );
};

export default Skills;
