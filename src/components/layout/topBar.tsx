import {
  Bell,
  Moon,
  Search,
  Menu,
} from "lucide-react";

export const Topbar = () => {
  return (
    <header className="bg-white border-b border-[#c9cacd]  h-[72px] px-6 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2 ">
        <button className="md:hiddn w-10 h-10 rounded-xl border flex items-center justify-center">
          <Menu size={14} />
           
         
        
        </button>

        </div>
      
      {/* SEARCH */}
      <div className="relative w-full max-w-xl flex items-center  align-middle justify-start    ">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />

        <input
          type="text"
          placeholder="Search"
          className="w-full pl-11 pr-4 py-3 self-center  rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* ACTIONS */}
      <div className="flex items-center gap-4 ml-6">

        <button className="w-10 h-10 rounded-xl border flex items-center justify-center">
          <Moon size={18} />
        </button>

        <button className="relative w-10 h-10 rounded-xl border flex items-center justify-center">
          <Bell size={18} />

          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
            1
          </span>
        </button>

        <div className="w-11 h-11 rounded-xl border-1 p-1  flex items-center justify-center font-semibold"  items-center justify-center>
<div className="h-9  w-9 rounded-full  bg-green-800 text-white flex items-center justify-center font-semibold">
          AD
        </div>
        </div>

        
      </div>
    </header>
  );
};

export default Topbar;