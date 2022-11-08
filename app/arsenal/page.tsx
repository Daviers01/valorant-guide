import Link from "next/link";
import Image from "next/image";
import classnames from "classnames";
import Dropdown from "../../components/Dropdown";

async function getAllWeapons() {
  const res = await fetch(
    "https://playvalorant.com/page-data/en-us/arsenal/page-data.json"
  );
  return res.json();
}

export default async function Agents() {
  const data = await getAllWeapons();

  const weapons = await data?.result?.data?.allContentstackArsenal?.nodes[0]
    ?.weapons_list.weapons;

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="font-tungsten text-white tracking-widest text-7xl md:text-9xl">
          ARSENAL
        </h1>

        {/* <h2 className="font-tungsten text-white tracking-widest text-3xl lg:text-6xl text-right">
          Choose your agent
        </h2> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
        {weapons.map((weapon: any) => {
          return (
            <Link
              key={weapon.weapon_name}
              href={weapon.weapon_asset.url}
              className={classnames(
                "p-10 flex relative bg-gray-800 overflow-hidden cursor-pointer scale-1 hover:scale-105 rounded-lg"
              )}
            >
              {/* <p className="font-tungsten text-5xl text-white absolute left-12 top-20 bottom-2 z-20 mx-auto">
                {weapon.weapon_name}
              </p> */}
              <span className="font-tungsten text-7xl stroke z-10 mx-auto">
                {weapon.weapon_name.toUpperCase() === "TACTICAL KNIFE"
                  ? "KNIFE"
                  : weapon.weapon_name.toUpperCase()}
              </span>
              <Image
                className="object-contain z-20 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
                src={weapon.weapon_asset.url}
                alt=""
                width={250}
                height={250}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}
