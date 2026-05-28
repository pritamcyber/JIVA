import { Search } from "lucide-react";

type Props = {
  value: string;

  onChange: (value: string) => void;
};

export const SearchInput = ({
  value,
  onChange,
}: Props) => {
  return (
    <div className="relative flex-1">

      <Search
        size={16}
        className="
          absolute
          left-9
          top-1/2
          -translate-y-1/2
          text-gray-400
        "
      />

      <input
        type="text"
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder="Search by patient, doctor, or specialty..."
        className="
          w-full
          h-[42px]
          rounded-3xl
          border
          border-gray-200
          bg-white
          pl-16
          pr-6
          text-lg
          font-thin
          outline-none
          focus:ring-2
          focus:ring-green-500
        "
      />
    </div>
  );
};

export default SearchInput;