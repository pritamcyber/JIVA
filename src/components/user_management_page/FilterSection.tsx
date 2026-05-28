import SearchInput from "./SearchInput";

import FilterDropdown from "./FilterDropdown";

type Props = {
  search: string;

  status: string;

  age: string;

  onSearchChange: (
    value: string
  ) => void;

  onStatusChange: (
    value: string
  ) => void;

  onAgeChange: (
    value: string
  ) => void;
};

const FilterSection = ({
  search,
  status,
  age,
  onSearchChange,
  onStatusChange,
  onAgeChange,
}: Props) => {
  return (
    <div
      className="
        flex
        flex-col
        xl:flex-row
        gap-5
      "
    >

      {/* SEARCH */}
      <SearchInput
        value={search}
        onChange={onSearchChange}
      />

      {/* STATUS */}
      <FilterDropdown
        label={status}
        selected={status}
        onSelect={onStatusChange}
        options={[
          "All",
          "Active",
          "Inactive",
        ]}
      />

      {/* AGE */}
      <FilterDropdown
        label={age}
        selected={age}
        onSelect={onAgeChange}
        options={[
          "All",
          "13-17",
          "18-35",
          "36-59",
          "60+",
        ]}
      />
    </div>
  );
};

export default FilterSection;