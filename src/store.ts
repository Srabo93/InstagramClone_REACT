import {
  collection,
  query,
  getDocs,
  DocumentData,
  onSnapshot,
} from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebase";

interface AppState {
  user: object;
  posts: DocumentData[];
  comments: DocumentData[];
  isLoading: boolean;
  error: Error | unknown;
  getAllPosts: () => Promise<void>;
  getCommentsById: (postId: string) => Promise<void>;
}

const useAppStore = create<AppState>((set, get) => ({
  user: {},
  posts: [],
  comments: [],
  isLoading: false,
  error: null,
  getAllPosts: async () => {
    set({ isLoading: true });

    try {
      const q = query(collection(db, "Posts"));
      const images: DocumentData[] = [];

      onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach(async (doc) => {
          images.push({
            ...doc.data(),
            id: doc.id,
          });
        });
        set({ posts: images, isLoading: false });
      });
    } catch (error) {
      set({ error: error, isLoading: false });
    }
  },
  getCommentsById: async (postId) => {
    set({ isLoading: true });

    const commentsData: DocumentData[] = [];
    try {
      const q = query(collection(db, "Posts", `${postId}`, "Comments"));

      const commentsSnapshot = await getDocs(q);

      commentsSnapshot.forEach((comment) => {
        // get().comments.push(comment.data());
        set((state) => ({ ...state.comments, comment.data() }));
      });
      set({ isLoading: false });
    } catch (error) {
      set({ error: error, isLoading: false });
    }
  },
}));

export default useAppStore;
