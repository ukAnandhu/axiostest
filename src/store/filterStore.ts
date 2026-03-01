import { create } from "zustand";

type FilterState = {
  selectedCategory: string[];
  selectedType: string[];

  toggleCategory: (category: string) => void;
  toggleType: (type: string) => void;

  clearFilters: () => void;
};

export const useFilterStore = create<FilterState>((set) => ({
  selectedCategory: [],
  selectedType: [],

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
}));