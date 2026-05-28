type Props = {
  title: string;

  value: number;

  valueColor?: string;
};

const StatsCard = ({
  title,
  value,
  valueColor = "text-[#1F2937]",
}: Props) => {
  return (
    <div
      className="
        bg-white
        border
        border-gray-200
        rounded-3xl
        p-6
        min-h-[100px]
        flex
        flex-col
        justify-between
      "
    >

      <h3 className="text-[#6B7280] text-md font-thin">
        {title}
      </h3>

      <h1
        className={`
          text-4xl
          font-normal
          ${valueColor}
        `}
      >
        {value}
      </h1>

    </div>
  );
};

export default StatsCard;