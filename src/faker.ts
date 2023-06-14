// import { faker } from "@faker-js/faker";
// import { addDoc, collection, serverTimestamp } from "firebase/firestore";
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
//     profilePicture: fakeimg,
//     createdAt: serverTimestamp()
//   });
// };

/*Seed uploaded Images by User
'5glqc1shgA2KLSouXda7'
'6KHisjk9MDPY4o9HS47v'
'Cp7l46jO9jllh17fEXXb'
'yuCvNsf0bAfoppKxpGjC'
 */

// const fakecaption = faker.lorem.paragraph(2);
// const fakeimg = faker.image.urlPicsumPhotos();
// const userId = "DHhPi3Iv3Ykw4KR5CgmI";
// const faketitle = faker.lorem.title()

// const uploadImg = async () => {
//   await addDoc(collection(db, "Images"), {
//     title: faketitle,
//     caption: fakecaption,
//     imageUrl: fakeimg,
//     userId: userId,
//     fileName: fakeimg,
//     createdAt: serverTimestamp(),
//   });
// };

/*
Seed Likes to uploaded Images
 */
// let users: string[] = [
// '5glqc1shgA2KLSouXda7'
// '6KHisjk9MDPY4o9HS47v'
// 'Cp7l46jO9jllh17fEXXb'
// 'yuCvNsf0bAfoppKxpGjC'
// ];
// let imageDocs: string[] = [
// 'FDer7QXQz5jAszrrFHYI'
// 'L761TtGWGl5rslQcQbiT'
// 'QgRuvBzV4QQ3meSk9kYA'
// 'WZKqVMPvLaghqvaJvl4l'
// 'rY4YJkLpQfKf7aaX0Dxx'
// ];

// const likeImg = async (imageArr: string[], userArr: string[]) => {
//   const addLike = async (image: string, user: string) => {
//     await addDoc(collection(db,"Images",image, "Likes"), {
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

//   let users: string[] = [
//     "5glqc1shgA2KLSouXda7",
//     "6KHisjk9MDPY4o9HS47v",
//     "Cp7l46jO9jllh17fEXXb",
//     "yuCvNsf0bAfoppKxpGjC",
//   ];
//   let imageDocs: string[] = [
//     "1Mxm2mysJxrsvr3gVOa7",
//     "2CaW45Auo8BnRQN4WGaH",
//     "FDer7QXQz5jAszrrFHYI",
//     "L761TtGWGl5rslQcQbiT",
//     "QgRuvBzV4QQ3meSk9kYA",
//     "Ro3Gu2IagxbqFg2CVz9i",
//     "WZKqVMPvLaghqvaJvl4l",
//     "ZNoYVodhdInAuLELNIOU",
//     "rY4YJkLpQfKf7aaX0Dxx",
//   ];
//   const fakecomment = faker.lorem.paragraph({ min: 2, max: 4 });
//   const commentImg = async (imageArr: string[], userArr: string[]) => {
//     const addComment = async (image: string, user: string) => {
//       await addDoc(collection(db, "Posts", image, "Comments"), {
//         comment: fakecomment,
//         imageId: image,
//         userId: user,
//         createdAt: serverTimestamp(),
//       });
//     };
//     userArr.forEach((user) => {
//       imageArr.forEach((image) => {
//         addComment(image, user);
//       });
//     });
//   };
