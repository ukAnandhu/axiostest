export default function FilterSidebar() {
  return (
    <div className="w-full md:w-64 space-y-6">

      <h2 className="text-lg font-semibold">FILTER</h2>

      {/* Categories */}
      <div className="border p-4 space-y-3">
        <h3 className="font-medium">CATEGORIES</h3>

        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" />
          Men
        </label>

        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" />
          Women
        </label>

        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" />
          Kids
        </label>
      </div>

      {/* Type */}
      <div className="border p-4 space-y-3">
        <h3 className="font-medium">Type</h3>

        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" />
          Topwear
        </label>

        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" />
          Bottomwear
        </label>

        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" />
          Winterwear
        </label>
      </div>

    </div>
  );
}