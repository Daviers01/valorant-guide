import Image from "next/image";
import classnames from "classnames";
import Skills from "../../../components/Skills";

async function getAgentData(agentName: string) {
  const res = await fetch(
    "https://playvalorant.com/page-data/en-us/agents/page-data.json"
  );
  const data = await res.json();
  const agents = await data?.result?.data?.allContentstackAgentList?.nodes[0]
    ?.agent_list;
  const agent = agents.find((agent: any) =>
    agent.title.toLowerCase() === "kay/o"
      ? "kay-o"
      : agent.title.toLowerCase() === agentName
  );

  return agent;
}

export default async function Agent(props: any) {
  const agentName = props.params.agent;
  const agent = await getAgentData(agentName);

  return (
    <div
      className={classnames(
        "p-10 flex justify-between bg-gray-800 h-fit relative rounded-lg overflow-hidden",
        `bg-${agentName}`
      )}
    >
      <div className="w-1/2">
        <h2 className="font-tungsten text-9xl text-red relative z-20">
          {agent.title.toUpperCase()}
        </h2>

        <div>
          <p className="mt-5 font-bold">&#47;&#47; ROLE</p>
          <p className="mt-3 font-tungsten text-5xl">
            {agent.role}
            <Image
              className="object-contain inline ml-2 -mt-1"
              src={agent.role_icon.url}
              alt=""
              width={35}
              height={35}
            />
          </p>

          <p className="mt-5 font-bold">&#47;&#47; BIOGRAPHY</p>
          <p className="mt-3">{agent.description}</p>

          <div>
            <p className="mt-5 font-bold">&#47;&#47; SPECIAL ABILITIES</p>
            <Skills agent={agent} />
          </div>
        </div>
      </div>
      <div className="relative w-1/2">
        <Image
          className="object-contain z-20 mx-auto mt-10"
          src={agent.agent_image.url}
          alt=""
          width={500}
          height={500}
        />
        <Image
          className="object-contain -z-20 absolute top-0 -right-28 scale-125 opacity-5"
          src={agent.agent_image.url}
          alt=""
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
