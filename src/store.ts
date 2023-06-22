import { create } from "zustand";

interface AppState {
  user: AuthUser;
  updateUser: (user: AuthUser) => void;
}

type AuthUser = {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
  createdAt: string;
};

const useAppStore = create<AppState>((set) => ({
  user: { displayName: "", email: "", photoURL: "", uid: "", createdAt: "" },
  updateUser: (user) => {
    set(() => ({
      user: user,
    }));
  },
}));

export default useAppStore;
