import { create } from "zustand";

interface AppState {
  user: { isLoggedIn: boolean; uid: string };
  isLoading: boolean;
  error: Error | unknown;
  updateUser: (isLoggedIn: boolean, uid: string) => void;
}

const useAppStore = create<AppState>((set) => ({
  user: { isLoggedIn: false, uid: "" },
  isLoading: false,
  error: undefined,
  updateUser: (isLoggedIn: boolean, uid: string) => {
    set(() => ({
      user: { isLoggedIn, uid },
    }));
  },
}));

export default useAppStore;
