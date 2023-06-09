import {
  collection,
  where,
  query,
  getDocs,
  DocumentData,
} from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebase";

interface AppState {
  user: object;
  posts: DocumentData[];
  isLoading: boolean;
  error: Error | any;
  getAllPosts: () => Promise<void>;
}

const useAppStore = create<AppState>((set) => ({
  user: {},
  posts: [],
  isLoading: false,
  error: null,
  getAllPosts: async () => {
    set({ isLoading: true });

    const imagesRef = collection(db, "Images");
    const imagesSnapshot = await getDocs(imagesRef);
    const imageIds = imagesSnapshot.docs.map((doc) => doc.id);

    try {
      const likesPromises = imageIds.map(async (imageId) => {
        const likesQuery = query(
          collection(db, "Likes"),
          where("imageId", "==", imageId)
        );
        const likesSnapshot = await getDocs(likesQuery);
        return likesSnapshot.docs.map((doc) => doc.data());
      });
      const allLikes = await Promise.all(likesPromises);

      const commentsPromises = imageIds.map(async (imageId) => {
        const commentsQuery = query(
          collection(db, "Comments"),
          where("imageId", "==", imageId)
        );
        const commentsSnapshot = await getDocs(commentsQuery);
        return commentsSnapshot.docs.map((doc) => doc.data());
      });
      const allComments = await Promise.all(commentsPromises);

      const postsWithLikesAndComments = imagesSnapshot.docs.map(
        (doc, index) => {
          const image = doc.data();
          const likes = allLikes[index];
          const comments = allComments[index];

          return {
            ...image,
            likes,
            comments,
          };
        }
      );

      set({ posts: postsWithLikesAndComments, isLoading: false });
    } catch (error) {
      set({ error: error, isLoading: false });
    }
  },
}));

export default useAppStore;
