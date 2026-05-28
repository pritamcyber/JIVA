import {
  Mail,
  Phone,
  Calendar,
  Eye,
  Pencil,
  Crown,
} from "lucide-react";


import { useNavigate } from "react-router-dom";

import type  { User } from "./user_data";

type Props = {
  user: User;
};  

const UserCard = ({ user }: Props) => {
  const navigate = useNavigate();

  return (
    <div onClick={() =>
    {navigate(`/users/${user.id}`) 
        console.log("User card clicked")}  }
    className="bg-white border border-gray-200 rounded-3xl p-6 text-sm">

      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-2">

        {/* LEFT SECTION */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* PROFILE */}
          <div className="flex items-start gap-4 min-w-[230px]">

            <div
              className={`
                w-10 
                p-3
                h-10
                rounded-full
                flex
                items-center 
                align-bottom
                self-center
                justify-center
                text-white
                bg-amber-300
                text-lg 
                font-semibold
                ${user.avatarColor}
              `}
            >
              {user.initials}
            </div>

            <div>

              <h2 className="text-base font-normal text-gray-800">
                {user.name}
              </h2>

              <div className="flex flex-wrap gap-2 mt-2">

                <span className="px-3 py-1 rounded-full bg-gray-100 text-sm">
                  {user.role}
                </span>

                <span
                  className={`
                    px-3
                    py-1
                    rounded-full
                    text-sm

                    ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }
                  `}
                >
                  {user.status}
                </span>

                <span className="px-3 py-1 rounded-full border border-[#d1d5db] text-sm">
                  {user.userType}
                </span>
              </div>

              {/* <div className="flex gap-4 mt-3 text-sm text-gray-500">

                <span>
                  {user.gender}
                </span>

                <span>
                  {user.age} yrs
                </span>

              </div> */}
            </div>
          </div>

          {/* CONTACT */}
          <div className="space-y-2 min-w-[200px]">

            <div className="flex items-center gap-3 text-gray-600">
              <Mail size={18} />
              <span>{user.email}</span>
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <Phone size={18} />
              <span>{user.phone}</span>
            </div>
          </div>

          {/* DATES */}
          <div className="space-y-1 min-w-[160px]">

            <div className="flex items-start gap-2">
              <Calendar
                size={18}
                className="text-gray-500 mt-1"
              />

              <div>
                <p className="text-gray-500 text-sm">
                  Joined
                </p>

                <h3 className="font-medium">
                  {user.joined}
                </h3>

                <p className="text-sm text-gray-400 mt-1">
                  Last: {user.lastActive}
                </p>
              </div>
            </div>
          </div>

          {/* APPOINTMENTS */}
          <div>

            <p className="text-gray-500">
              Appointments
            </p>

            <h1 className="text-lg font-normal text-blue-600 mt-2">
              {user.appointments}
            </h1>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-2 pl-4">

          <button className="h-8 px-2 rounded-lg bg-orange-500 text-white flex items-center gap-2 hover:opacity-90 text-xs w-fit whitespace-nowrap">

            <Crown size={15} />

            <span className="text-xs font-medium whitespace-nowrap">
              Upgrade to Prime
            </span>
          </button>

          <button className="h-8 px-3 rounded-xl border flex items-center gap-2 hover:bg-gray-50 text-sm">

            <Eye size={18} />

            <span>View</span>
          </button>

          <button className="h-8 px-3 rounded-xl border flex items-center gap-2 hover:bg-gray-50 text-sm">

            <Pencil size={18} />

            <span>Edit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;