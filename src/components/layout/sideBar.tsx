import { sidebarItems } from "./sideBar_data";

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex w-[270px]   bg-white border-r border-[#c9cacd] flex-col">
      
      {/* LOGO */}
      <div className="h-[72px] border-b flex border-[#c9cacd]    items-center px-8 text-center justify-center">
        <h1 className="text-xl font-bold text-green-600 items-center self-center align-middle justify-center  text-center">
          Jiva
        </h1>
      </div>

      {/* MENU */}
      <div className="flex-1 p-3 space-y-0.5 overflow-y-auto">

        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.title}
            title={item.title}
            icon={<item.icon size={20} />}
            active={item.active}
          />
        ))}

      </div>

      {/* USER */}
      <div className="border-t border-t-1 border-[#c9cacd] p-4 flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center font-semibold">
          AD
        </div>

        <div>
          <h3 className="font-medium text-sm">
            Admin User
          </h3>

          <p className="text-xs text-gray-500">
            admin@healthcare.com
          </p>
        </div>
      </div>
    </aside>
  );
};

type SidebarItemProps = {
  icon: React.ReactNode;
  title: string;
  active?: boolean;
};

const SidebarItem = ({
  icon,
  title,
  active,
}: SidebarItemProps) => {
  return (
    <button
      className={`
        w-full
        flex
        items-center
        gap-3
        px-4
        py-3
        rounded-xl
        transition-all
        text-sm
        font-medium

        ${
          active
            ? "bg-green-100 text-green-700"
            : "text-gray-700 hover:bg-gray-100"
        }
      `}
    >
      {icon}

      <span>{title}</span>
    </button>
  );
};

export default Sidebar;