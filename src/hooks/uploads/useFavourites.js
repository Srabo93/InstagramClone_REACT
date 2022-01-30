// import { useContext, useEffect, useRef } from "react";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import { db } from "../../API/firebase";
// import AuthContext from "../../store/auth-context";

// const useFavourites = (url) => {
//   const authCtx = useContext(AuthContext);
//   const blockInitialRender = useRef(true);

//   useEffect(() => {
//     if (blockInitialRender.current) {
//       blockInitialRender.current = false;
//       return;
//     }
//     const addFavourites = async () => {
//       const docRef = await addDoc(
//         collection(db, "users", `${authCtx.user}`, "favourites"),
//         {
//           url,
//           likeCreatedAt: serverTimestamp(),
//         }
//       );
//       console.log("Document written with ID: ", docRef.id);
//     };
//     addFavourites();
//   }, [url, authCtx.user]);
// };

// export default useFavourites;
