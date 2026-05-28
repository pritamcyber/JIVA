import {
  ChevronDown,
  Check,
  Funnel,
} from "lucide-react";

type Props = {
  label: string;

  options: string[];

  selected: string;

  onSelect: (value: string) => void;
};

const FilterDropdown = ({
  label,
  options,
  selected,
  onSelect,
}: Props) => {
  return (
    <div className="relative group min-w-[260px]">

      {/* BUTTON */}
      <button
        className="
          w-full
          h-[42px]
          rounded-xl
          border
          border-gray-200
          bg-white
          px-5
          flex
          items-center
          justify-between
        "
      >

        <div className="flex items-center gap-4">

          <Funnel
            size={16}

            className="text-gray-400"
          />

          <span className="text-xl font-thin text-gray-800">
            {label}
          </span>
        </div>

        <ChevronDown
          size={14}
          className="text-gray-400"
        />
      </button>

      {/* DROPDOWN */}
      <div
        className="
          absolute
          top-[45px]
          left-0
          w-full
          bg-white
          border
          border-gray-200
          rounded-2xl
          p-3
          shadow-lg
          opacity-0
          invisible
          group-hover:opacity-100
          group-hover:visible
          transition-all
          z-50
        "
      >

        <div className="space-y-2">

          {options.map((option) => {

            const isSelected =
              selected === option;

            return (
              <button
                key={option}
                onClick={() =>
                  onSelect(option)
                }
                className={`
                  w-full
                  px-6
                  py-5
                  rounded-2xl
                  flex
                  items-center
                  justify-between
                  text-left
                  text-md
                  transition-all

                  ${
                    isSelected
                      ? "bg-gray-100"
                      : "hover:bg-gray-50"
                  }
                `}
              >

                <span>
                  {option}
                </span>

                {isSelected && (
                  <Check size={24} />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;