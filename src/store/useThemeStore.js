import { create } from "zustand";

export const useLayoutStore = create((set) => ({
  isDark: false,
  collapsed: false,
  toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
  toggleCollapse: () => set((state) => ({ collapsed: !state.collapsed })),
}));
