import { useFilterStore } from "@/store/filterStore";

export default function FilterSidebar() {
  const {
    selectedCategory,
    selectedType,
    toggleCategory,
    toggleType,
    clearFilters,
  } = useFilterStore();
  return (
    <div className="w-full md:w-64 space-y-6">

      <h2 className="text-lg font-semibold">FILTER</h2>

      {/* Categories */}
      <div className="border p-4 space-y-3">
        <h3 className="font-medium">CATEGORIES</h3>
         {["men", "women", "kids"].map((cat) => (
          <label key={cat} className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={selectedCategory.includes(cat)}
              onChange={() => toggleCategory(cat)} />
            {cat}
          </label>
         ))}
        
      </div>

      {/* Type */}
      <div className="border p-4 space-y-3">
        <h3 className="font-medium">Type</h3>

        {["topwear", "bottomwear", "winterwear"].map((type) => (
          <label key={type} className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={selectedType.includes(type)}
              onChange={() => toggleType(type)} />
            {type}
          </label>
          
         ))}
         
      </div>

    </div>
  );
}