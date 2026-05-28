import {
  User,
  ShoppingBag,
  CreditCard,
  Users,
} from "lucide-react";

import type { UserTab } from "../../types/UserTabs";

type Props = {
  activeTab: UserTab;

  setActiveTab: (
    tab: UserTab
  ) => void;
};

export const UserTabs = ({
  activeTab,
  setActiveTab,
}: Props) => {

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      icon: User,
    },

    {
      id: "orders",
      label: "Orders & Bookings",
      icon: ShoppingBag,
    },

    {
      id: "payments",
      label: "Payments",
      icon: CreditCard,
    },

    {
      id: "family",
      label: "Family Members",
      icon: Users,
    },
  ] as const;

  return (
    <div
      className="
        border-b
        mt-6
        border-gray-200
        overflow-x-auto
        
        mb-6
      "
    >

      <div className="flex min-w-max">

        {tabs.map((tab) => {

          const isActive =
            activeTab === tab.id;

          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() =>
                setActiveTab(tab.id)
              }
              className={`
                h-10
                px-4
                
                flex
                items-center
                gap-1
                border-b-1
                transition-all
                whitespace-nowrap

                ${
                  isActive
                    ? `
                      border-green-700
                      text-green-700
                    `
                    : `
                      border-transparent
                      text-gray-700
                      hover:text-black
                    `
                }
              `}
            >

              <Icon size={18} />

              <span className="text-sm font-medium">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default UserTabs;