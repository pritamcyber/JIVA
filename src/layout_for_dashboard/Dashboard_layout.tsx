import Sidebar from "../components/layout/sideBar";
import Topbar from "../components/layout/topBar";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex h-screen bg-[#f6f7f9] overflow-hidden">
      {/* LEFT */}
      <Sidebar />
      {/* <h1 className="text-4xl font-semibold text-gray-800">Dashboard</h1> */}

      {/* RIGHT */}
      {/* <Topbar /> */}
      <main className="flex-1 min-h-0 ">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;