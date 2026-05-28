type Props = {
  title: string;

  value: string | number;

  icon: React.ReactNode;

  valueColor?: string;

  iconBg?: string;
};

export const UserStatCard = ({
  title,
  value,
  icon,
  valueColor = "text-[#1F2937]",
  iconBg = "bg-green-100",
}: Props) => {
  return (
    <div
    onClick={() => console.log("clicked")}

      className="
        bg-white
        border
        border-gray-200
        rounded-3xl
        px-6
        p-5
        min-h-[100px]
        flex
        items-start
        justify-between
      "
    >

      {/* LEFT */}
      <div>

        <h3 className="text-gray-500 text-lg leading-snug">
          {title}
        </h3>

        <h1
          className={`
            text-xl
            font-semibold
            mt-3
            ${valueColor}
          `}
        >
          {value}
        </h1>
      </div>

      {/* ICON */}
      <div
        className={`
          w-16
          h-16
          rounded-2xl
          flex
          items-center
          justify-center
          ${iconBg}
        `}
      >
        {icon}
      </div>
    </div>
  );
};

export default UserStatCard;