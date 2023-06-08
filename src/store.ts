import { create } from "zustand";

interface AppState {
  user: object;
  images: object;
  comments: object;
  likes: object;
  //   increase: (by: number) => void;
}

const useAppStore = create<AppState>()((set) => ({
  user: {},
  images: {},
  comments: {},
  likes: {},
  //   increase: (by) => set((state) => ({ bears: state.bears + by })),
}));
