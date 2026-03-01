import { create } from "zustand";


type SortOption = "low-high" | "high-low" | "";

type FilterState = {
  selectedCategory: string[];
  selectedType: string[];
  sortOption: SortOption;
  toggleCategory: (category: string) => void;
  toggleType: (type: string) => void;
  setSortOption: (option: SortOption) => void;
  clearFilters: () => void;
};

export const useFilterStore = create<FilterState>((set) => ({
  selectedCategory: [],
  selectedType: [],
  sortOption: "",

  toggleCategory: (category) =>
    set((state) => ({
      selectedCategory: state.selectedCategory.includes(category)
        ? state.selectedCategory.filter((c) => c !== category)
        : [...state.selectedCategory, category],
    })),
 
  toggleType: (type) =>
    set((state) => ({
      selectedType: state.selectedType.includes(type)
        ? state.selectedType.filter((t) => t !== type)
        : [...state.selectedType, type],
    })),

  clearFilters: () =>
    set({
      selectedCategory: [],
      selectedType: [],
    }),

  setSortOption: (option: SortOption) =>
    set({
      sortOption: option,
    }),
}));