import StatsCard from "./StateCard";

import { useEffect } from "react";
import type { User } from "../user_data";

type Props = {
  

  users: User[];
}


const StatsSection = ({ users = [] }: Props) => {

  useEffect(() => {
    console.log("StatsSection rendered with users:", [...users]);
  }, [users]);

  // TOTAL USERS
  const totalUsers = users.length;

  // PRIME USERS
  const totalPrimeUsers =
    users.filter(
      (user) => user.isPrime
    ).length;

  // NON PRIME USERS
  const totalNonPrimeUsers =
    users.filter(
      (user) => !user.isPrime
    ).length;

  // TOTAL FAMILY MEMBERS
  const totalFamilyMembers =
    users.reduce(
      (accumulator, user) =>
        accumulator +
        user.totalFamilyMembers,
      0
    );

  const stats = [
    {
      title: "Total User",
      value: totalUsers,
      color: "text-[#1F2937]",
    },

    {
      title: "Prime User",
      value: totalPrimeUsers,
      color: "text-[#16A34A]",
    },

    {
      title: "Non-Prime User",
      value: totalNonPrimeUsers,
      color: "text-[#16A34A]",
    },

    {
      title: "Total Family members",
      value: totalFamilyMembers,
      color: "text-[#16A34A]",
    },
  ];

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-5
      "
    >

      {stats.map((item) => (
        <StatsCard
          key={item.title}
          title={item.title}
          value={item.value}
          valueColor={item.color}
        />
      ))}

    </div>
  );
};

export default StatsSection;