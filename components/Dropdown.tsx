"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
const roles = ["All", "Sentinel", "Duelist", "Initiator", "Controller"];

function Dropdown() {
  const router = useRouter();
  const pathname = usePathname();

  const onRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(`${pathname}?role=${e.target.value}`);
    router.replace(`${pathname}?role=${e.target.value}`);
    router.refresh();
  };

  return (
    <div>
      <select
        name="agents"
        onChange={onRoleChange}
        className={"text-black p-2 rounded-md"}
      >
        {roles.map((role) => {
          return (
            <option key={role} value={role}>
              {role.toUpperCase()}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Dropdown;
