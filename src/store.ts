import { collection, where, query, getDocs } from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebase";

interface AppState {
  user: object;
  posts: object;
  getAllPosts: () => Promise<void>;
}

const useAppStore = create<AppState>((set) => ({
  user: {},
  posts: {},
  getAllPosts: async () => {
    const imagesRef = collection(db, "Images");
    const imagesSnapshot = await getDocs(imagesRef);
    const imageIds = imagesSnapshot.docs.map((doc) => doc.id);

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

    const PostsWithLikesAndComments = imagesSnapshot.docs.map((doc, index) => {
      const image = doc.data();
      const likes = allLikes[index];
      const comments = allComments[index];

      return {
        ...image,
        likes,
        comments,
      };
    });

    set({ posts: PostsWithLikesAndComments });
  },
}));

export default useAppStore;
