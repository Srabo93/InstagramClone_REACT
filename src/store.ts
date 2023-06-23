import { create } from "zustand";
import { AuthUser } from "./hooks/useAuth";

interface AppState {
  user: AuthUser;
  updateUser: (user: AuthUser) => void;
}

const useAppStore = create<AppState>((set) => ({
  user: { displayName: "", email: "", photoURL: "", uid: "", createdAt: "" },
  updateUser: (user) => {
    set(() => ({
      user: user,
    }));
  },
}));

export default useAppStore;
