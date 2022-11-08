import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className={
        "flex flex-col flex-1 px-10 justify-center items-center min-h-screen"
      }
    >
      <h1 className="text-left relative">
        <Image
          src="/valorant-logo-name.png"
          alt="Valorant logo name"
          width={450}
          height={450}
        />
        <span className="font-tungsten text-white tracking-widest text-8xl md:text-9xl">
          GUIDES
        </span>

        <Image
          className="absolute hidden md:block md:top-8 md:-right-4 rotate-45"
          src="/valorant-flash.png"
          alt=""
          width={200}
          height={200}
        />
      </h1>

      <div className="flex flex-row flex-wrap justify-center">
        <Link
          href={"/agents"}
          className="rounded-2xl bg-gradient-to-l from-[#FF4655] to-valorant-bg scale-100 hover:scale-105 overflow-hidden m-2 w-72 h-32 cursor-pointer p-7 text-center relative transition-all"
        >
          <div className="flex items-center justify-center">
            <span className="text-8xl font-tungsten z-10 absolute top-1 stroke">
              AGENTS
            </span>
            <Image
              className="inline"
              src="/valorant-helmet.png"
              alt=""
              width={30}
              height={30}
            />
            <h2 className="inline font-tungsten ml-5 text-5xl z-20 text-white">
              AGENTS
            </h2>
          </div>
          <p className="text-white text-xs mt-2">
            All agent info and their abilities
          </p>
        </Link>
        <Link
          href={"/arsenal"}
          className="rounded-2xl bg-gradient-to-l from-[#FF4655] to-valorant-bg scale-100 hover:scale-105 overflow-hidden m-2 w-72 h-32 cursor-pointer p-7 text-center relative"
        >
          <div className="flex items-center justify-center">
            <span className="text-8xl font-tungsten z-10 absolute top-1 stroke">
              ARSENAL
            </span>
            <Image
              className="inline"
              src="/valorant-gun.png"
              alt=""
              width={30}
              height={30}
            />
            <h2 className="inline font-tungsten ml-5 text-5xl z-20 text-white">
              ARSENAL
            </h2>
          </div>
          <p className="text-white text-xs mt-2">
            All weapon types and other info
          </p>
        </Link>
      </div>
    </main>
  );
}
