import {
  ShoppingBag,
  Stethoscope,
  Users,
  CreditCard,
} from "lucide-react";

import {
  useParams,
} from "react-router-dom";

import { users} from "../user_management_page/user_data";

import UserStatCard from "./UserStatCard";

const UserStatsSection = () => {

  const { id } = useParams();

  const user = users.find(
    (u) => u.id === Number(id)
  );

  if (!user) {
    return null;
  }

  const stats = [
    {
      title: "Total Orders",

      value: user.totalOrders,

      icon: (
        <ShoppingBag
          size={32}
          className="text-blue-600"
        />
      ),

      iconBg: "bg-blue-100",

      valueColor: "text-[#1F2937]",
    },

    {
      title:
        "Total Booking & Appointment",

      value: user.appointments,

      icon: (
        <Stethoscope
          size={32}
          className="text-green-700"
        />
      ),

      iconBg: "bg-green-100",

      valueColor: "text-green-600",
    },

    {
      title: "Total Family Member",

      value: user.totalFamilyMembers,

      icon: (
        <Users
          size={32}
          className="text-green-700"
        />
      ),

      iconBg: "bg-green-100",

      valueColor: "text-green-600",
    },

    {
      title: "Total Spent",

      value: `₹${user.totalSpent}.00`,

      icon: (
        <CreditCard
          size={32}
          className="text-green-700"
        />
      ),

      iconBg: "bg-green-100",

      valueColor: "text-[#1F2937]",
    },
  ];

  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
      "
    >

      {stats.map((item) => (
        <UserStatCard
          key={item.title}
          title={item.title}
          value={item.value}
          icon={item.icon}
          iconBg={item.iconBg}
          valueColor={item.valueColor}
        />
      ))}

    </div>
  );
};

export default UserStatsSection;