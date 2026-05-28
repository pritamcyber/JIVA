import { Plus } from "lucide-react";

type Props = {
  onAddUser: () => void;
};

const PageHeader = ({
  onAddUser,
}: Props) => {

    const clickHandler = () => {
        console.log("Add User button clicked");
        onAddUser();
    }

  return (
    <div className="flex items-center justify-between">

      <div>

        <h1 className="text-4xl font-semibold">
          User Management
        </h1>

        <p className="text-gray-500 mt-1">
          Manage user accounts and permissions
        </p>
      </div>

      <button
        onClick={clickHandler}
        className="
          h-14
          px-6
          rounded-2xl
          bg-[#1F2937]
          text-white
          flex
          items-center
          gap-2
        "
      >

        <Plus size={20} />

        <span>Add User</span>
      </button>
    </div>
  );
};

export default PageHeader;