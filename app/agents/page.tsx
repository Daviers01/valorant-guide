import Link from "next/link";
import Image from "next/image";
import classnames from "classnames";
import Dropdown from "../../components/Dropdown";

async function getAllAgents() {
  const res = await fetch(
    "https://playvalorant.com/page-data/en-us/agents/page-data.json"
  );
  return res.json();
}

export interface QueryParams {
  params?: {};
  searchParams?: {
    role: string;
  };
}

export default async function Agents({ searchParams }: QueryParams) {
  console.log(searchParams);
  const data = await getAllAgents();

  let agents = await data?.result?.data?.allContentstackAgentList?.nodes[0]
    ?.agent_list;

  let filtered = [];

  if (searchParams?.role && searchParams?.role !== "All") {
    filtered = agents.filter((val: any) => val.role === searchParams.role);
    console.log(agents);
  }

  if (filtered.length) {
    agents = filtered;
  }

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="font-tungsten text-white tracking-widest text-7xl md:text-9xl">
          AGENTS
        </h1>
        {/* <h2 className="font-tungsten text-white tracking-widest text-3xl lg:text-6xl text-right">
          Choose your agent
        </h2> */}
        <Dropdown />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
        {agents.map((agent: any) => {
          const agentName = agent.title.toLowerCase();
          return (
            <Link
              key={agent.id}
              href={agent.url.url}
              className={classnames(
                "p-10 flex relative cursor-pointer scale-1 h-[300px] hover:scale-105 rounded-lg",
                `bg-${agentName === "kay/o" ? "kay-o" : agentName}`
              )}
            >
              <div className="font-tungsten text-6xl text-white relative z-20">
                <p className="text-3xl">{agent.role}</p>
                <p>{agent.title}</p>
              </div>
              <Image
                className="object-contain z-20 absolute right-2 bottom-2"
                src={agent.agent_image.url}
                alt=""
                width={200}
                height={200}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}
