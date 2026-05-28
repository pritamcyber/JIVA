export const OverviewTab = () => {
  return (
    <div className="space-y-8">

      {/* TOP GRID */}
      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-8
        "
      >

        {/* PERSONAL INFO */}
        <div
          className="
            bg-white
            border
            border-gray-200
            rounded-3xl
            p-8
            min-h-[420px]
          "
        >

          <div className="flex items-center justify-between">

            <h1 className="text-3xl font-semibold">
              Personal Information
            </h1>

            <button
              className="
                h-14
                px-6
                rounded-2xl
                border
                border-gray-200
              "
            >
              Edit
            </button>
          </div>
        </div>

        {/* ADDRESS */}
        <div
          className="
            bg-white
            border
            border-gray-200
            rounded-3xl
            p-8
            min-h-[420px]
          "
        >

          <div className="flex items-center justify-between">

            <h1 className="text-3xl font-semibold">
              Addresses
            </h1>

            <button
              className="
                h-14
                px-6
                rounded-2xl
                border
                border-gray-200
              "
            >
              Add
            </button>
          </div>
        </div>
      </div>

      {/* RECENT ACTIVITY */}
      <div
        className="
          bg-white
          border
          border-gray-200
          rounded-3xl
          p-8
          min-h-[500px]
        "
      >

        <h1 className="text-3xl font-semibold">
          Recent Activity
        </h1>
      </div>
    </div>
  );
};

export default OverviewTab;