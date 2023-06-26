import { faker } from "@faker-js/faker";
import {
  addDoc,
  updateDoc,
  getDocs,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../src/firebase";

/**
 * Seed User Data into db
 * */
// const fakemail = faker.internet.email();
// const fakename = faker.person.fullName();
// const fakeimg = faker.image.urlLoremFlickr({
//   category: "Person",
//   height: 256,
//   width: 128,
// });
// const addUsers = async () => {
//   await addDoc(collection(db, "Users2"), {
//     email: fakemail,
//     displayName: fakename,
//     photoUrl: fakeimg,
//     createdAt: serverTimestamp(),
//   });
// };

/**
 * Upload Images by User
 */

// const addPosts = async () => {
//   const userData = [];
//   const querySnapshot = await getDocs(collection(db, "Users2"));
//   querySnapshot.forEach((doc) => {
//     userData.push({ id: doc.id, data: doc.data() });
//   });
//
//   userData.forEach(async (user) => {
//     const fakecaption = faker.lorem.paragraph(2);
//     const fakeimg = faker.image.urlPicsumPhotos();
//     const faketitle = faker.lorem.words({ min: 1, max: 3 });
//     await addDoc(collection(db, "Posts"), {
//       title: faketitle,
//       caption: fakecaption,
//       imageUrl: fakeimg,
//       user: { ...user.data, uid: user.id },
//       fileName: fakeimg,
//       createdAt: serverTimestamp(),
//     });
//   });
// };
// addPosts();

/**
 * Seed Likes to uploaded Images
 */

// (async () => {
//   const usersIds = [];
//   const postIds = [];
//
//   const userSnap = await getDocs(collection(db, "Users2"));
//   userSnap.forEach((doc) => {
//     usersIds.push(doc.id);
//   });
//
//   const postSnap = await getDocs(collection(db, "Posts"));
//   postSnap.forEach((doc) => {
//     postIds.push(doc.id);
//   });
//
//   const seedLikes = async () => {
//     const addLikes = async (post, user) => {
//       await addDoc(collection(db, "Posts", post, "Likes"), {
//         userId: user,
//       });
//     };
//
//     postIds.forEach((post) => {
//       usersIds.forEach((user) => {
//         addLikes(post, user);
//       });
//     });
//   };
//   seedLikes();
// })();
//
//
//
/**
 * Seed Comments to uploaded Images
 */

// (async () => {
//   const usersData = [];
//   const postIds = [];
//   const userSnap = await getDocs(collection(db, "Users2"));
//   userSnap.forEach((doc) => {
//     usersData.push({ id: doc.id, data: doc.data() });
//   });
//   const postSnap = await getDocs(collection(db, "Posts"));
//   postSnap.forEach((doc) => {
//     postIds.push(doc.id);
//   });
//   const fakecomment = faker.lorem.paragraph({ min: 2, max: 4 });
//
//   const seedComments = async (posts, users) => {
//     const addComment = async (post, user) => {
//       await addDoc(collection(db, "Posts", post, "Comments"), {
//         comment: fakecomment,
//         postId: post,
//         user: { ...user.data, uid: user.id },
//         createdAt: serverTimestamp(),
//       });
//     };
//     users.forEach((user) => {
//       posts.forEach((post) => {
//         addComment(post, user);
//       });
//     });
//   };
//   seedComments(postIds, usersData);
// })();
