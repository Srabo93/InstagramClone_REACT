// import React from "react";
// import { useState, useEffect, useContext } from "react";
// import IconButton from "@mui/material/IconButton";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import { onSnapshot } from "firebase/firestore";
// import { db } from "../API/firebase";
// import AuthContext from "../store/auth-context";

// const FavouriteButtonState = ({ favouriteHandler, state }) => {
//   const authCtx = useContext(AuthContext);
//   const [like, setLike] = useState([]);

//   useEffect(() => {
//     onSnapshot(
//       collection(db, "users", `${authCtx.user}`, "favourites"),
//       (snapshot) => {
//         setLike(snapshot.docs);
//       }
//     );
//   }, [authCtx.user, db]);

//   likePicture = async () => {};
//   const favouriteStateOff = (
//     <IconButton color="primary" aria-label="label" onClick={favouriteHandler}>
//       <FavoriteBorderIcon fontSize="large" />
//     </IconButton>
//   );
//   const favouriteStateOn = (
//     <IconButton color="primary" aria-label="label">
//       <FavoriteIcon fontSize="large" />
//     </IconButton>
//   );

//   return state === ture ? favouriteStateOn : favouriteStateOff;
// };

// export default FavouriteButtonState;
