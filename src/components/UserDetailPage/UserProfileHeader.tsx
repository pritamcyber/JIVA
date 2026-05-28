import {
  ArrowLeft,
  Calendar,
  Activity,
  Crown,
  ChevronDown,
} from "lucide-react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import { users } from "../user_management_page/user_data";

const UserProfileHeader = () => {

  const navigate = useNavigate();

  const { id } = useParams();

  const user = users.find(
    (u) => u.id === Number(id)
  );

  if (!user) {
    return <h1>User not found</h1>;
  }

  return (
    <div className="space-y-8">

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/")}
        className="
          flex
          items-center
          gap-3
          text-gray-600
          hover:text-black
        "
      >

        <ArrowLeft size={22} />

        <span className="text-lg font-thin">
          Back to User Management
        </span>
      </button>

      {/* PROFILE */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">

        {/* LEFT */}
        <div className="flex items-start gap-6">

          {/* AVATAR */}
          <div
            className="
              w-32
              h-32
              rounded-full
              bg-green-100
              flex
              items-center
              justify-center
              text-5xl
              font-semibold
              text-green-700
            "
          >
            {user.initials}
          </div>

          {/* INFO */}
          <div>

            <h1 className="text-5xl font-semibold text-gray-800">
              {user.name}
            </h1>

            {/* BADGES */}
            <div className="flex flex-wrap gap-3 mt-5">

              <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                {user.status}
              </span>

              <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
                {user.role}
              </span>

              <span className="px-2 py-1 rounded-full border text-sm">
                {user.userType}
              </span>

              <span className="text-sm text-gray-500 flex items-center">
                ID: #{user.id}
              </span>
            </div>

            {/* DATES */}
            <div className="flex flex-wrap gap-10 mt-6 pb-4">

              <div className="flex items-center gap-3">

                <Calendar
                  size={24}
                  className="text-gray-500"
                />

                <span className="text-sm text-gray-600">
                  Joined {user.joined}
                </span>
              </div>

              <div className="flex items-center gap-3">

                <Activity
                  size={24}
                  className="text-gray-500"
                />

                <span className="text-sm text-gray-600">
                  Last active {user.lastActive}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col sm:flex-row gap-4">

          {/* PRIME BUTTON */}
          <button
            className="
              h-12
              px-4
              rounded-xl
              bg-orange-500
              text-white
              flex
              items-center
              gap-3
              text-sm
            "
          >

            <Crown size={15} />

            <span>
              Upgrade to Prime
            </span>
          </button>

          {/* STATUS */}
          <button
            className="
              h-12
              min-w-[170px]
              rounded-xl
              border
              border-gray-200
              bg-white
              px-3
              flex
              items-center
              justify-between
              text-sm
            "
          >

            <span>
              {user.status}
            </span>

            <ChevronDown size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileHeader;