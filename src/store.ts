import {
  collection,
  query,
  DocumentData,
  onSnapshot,
} from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebase";

interface AppState {
  user: object;
  isLoading: boolean;
  error: Error | unknown;
}

const useAppStore = create<AppState>((set) => ({
  user: {},
  isLoading: false,
  error: undefined,
}));

export default useAppStore;
