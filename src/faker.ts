// import { faker } from "@faker-js/faker";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "../src/firebase";

/*Seed User Data into db */
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
//     name: fakename,
//     profile_picture: fakeimg,
//   });
// };

/*Seed uploaded Images by User 
  DHhPi3Iv3Ykw4KR5CgmI
  Uk20pVU5PnKwDXcQWpn6
  VE6LBkQ7iHu2iZhJzilp
  nuVGrGgNNEVHItBSv4s0
  pnjhcihu9kwEafATSYkW
  tpCxm4DkqNoDlnBpjCBh
  uVHbvdJCblybLaodwms8
*/

// const fakecaption = faker.lorem.paragraph(2);
// const fakeimg = faker.image.urlPicsumPhotos();
// const userId = "DHhPi3Iv3Ykw4KR5CgmI";

// const uploadImg = async () => {
//   await addDoc(collection(db, "Images"), {
//     caption: fakecaption,
//     imageUrl: fakeimg,
//     userId: userId,
//   });
// };

/*
Seed Likes to uploaded Images
 */
// let users: string[] = [
//   "DHhPi3Iv3Ykw4KR5CgmI",
//   "Uk20pVU5PnKwDXcQWpn6",
//   "VE6LBkQ7iHu2iZhJzilp",
//   "nuVGrGgNNEVHItBSv4s0",
//   "pnjhcihu9kwEafATSYkW",
//   "tpCxm4DkqNoDlnBpjCBh",
//   "uVHbvdJCblybLaodwms8",
// ];
// let imageDocs: string[] = [
//   "SVvLVJTdm3hAshvpWnQY",
//   "TbNIaSGkA36XflT7NYyP",
//   "UmMGZhULqLHJn7PbkIiC",
//   "X289V1deT0mMhDl8AoY9",
//   "b5YFTOHqckfrOZNTsVcI",
//   "bhm3QsI8P0fWq6h721ym",
//   "c90e5mEUsNfd3BjXB2Ku",
//   "eHFmYpVrOTwssGufwRKD",
//   "jZ7PXX51aeBTUkRbkV9z",
//   "ln17t7qsLFAVpq4qsQxm",
//   "pu9PDUshS0YiKFvxH2w7",
//   "rSKOaSt7GRhX0VDJqe32",
//   "u7KTj97QR0OOUB9T8rpv",
//   "z1gGfZbiBEOMIMdv3x8u",
// ];

// const likeImg = async (imageArr: string[], userArr: string[]) => {
//   const addLike = async (image: string, user: string) => {
//     await addDoc(collection(db, "Likes"), {
//       imageId: image,
//       userId: user,
//     });
//   };
//   userArr.forEach((user) => {
//     imageArr.forEach((image) => {
//       addLike(image, user);
//     });
//   });
// };

/*
Seed comments to uploaded Images
 */
// let users: string[] = [
//   "DHhPi3Iv3Ykw4KR5CgmI",
//   "Uk20pVU5PnKwDXcQWpn6",
//   "VE6LBkQ7iHu2iZhJzilp",
//   "nuVGrGgNNEVHItBSv4s0",
//   "pnjhcihu9kwEafATSYkW",
//   "tpCxm4DkqNoDlnBpjCBh",
//   "uVHbvdJCblybLaodwms8",
// ];
// let imageDocs: string[] = [
//   "SVvLVJTdm3hAshvpWnQY",
//   "TbNIaSGkA36XflT7NYyP",
//   "UmMGZhULqLHJn7PbkIiC",
//   "X289V1deT0mMhDl8AoY9",
//   "b5YFTOHqckfrOZNTsVcI",
//   "bhm3QsI8P0fWq6h721ym",
//   "c90e5mEUsNfd3BjXB2Ku",
//   "eHFmYpVrOTwssGufwRKD",
//   "jZ7PXX51aeBTUkRbkV9z",
//   "ln17t7qsLFAVpq4qsQxm",
//   "pu9PDUshS0YiKFvxH2w7",
//   "rSKOaSt7GRhX0VDJqe32",
//   "u7KTj97QR0OOUB9T8rpv",
//   "z1gGfZbiBEOMIMdv3x8u",
// ];

// const fakecomment = faker.lorem.paragraph({ min: 2, max: 4 });
// const commentImg = async (imageArr: string[], userArr: string[]) => {
//   const addComment = async (image: string, user: string) => {
//     await addDoc(collection(db, "Comments"), {
//       comment: fakecomment,
//       imageId: image,
//       userId: user,
//     });
//   };
//   userArr.forEach((user) => {
//     imageArr.forEach((image) => {
//       addComment(image, user);
//     });
//   });
// };
