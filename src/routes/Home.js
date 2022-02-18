import React, { useEffect } from "react";
import { useState } from "react";
import {
  collection,
  query,
  orderBy,
  startAfter,
  limit,
  getDocs,
  endBefore,
} from "firebase/firestore";
import { db } from "../API/firebase";
import ContainerWrapper from "../UI/ContainerWrapper";
import Modal from "../components/Modal";
import Title from "../components/Title";
import HomeCards from "../UI/HomeCards";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const Home = () => {
  const [imgData, setImgData] = useState(null);
  const [backdrop, setBackdrop] = useState(false);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [pageDocs, setPageDocs] = useState([]);
  const [lastPageIndex, setLastPageIndex] = useState(null);

  useEffect(() => {
    const getAllDocs = async () => {
      const queryAllDocs = query(collection(db, "All_Images"));
      const allDocs = await getDocs(queryAllDocs);
      const docsAmount = allDocs.docs.length;
      setPageCount(Math.ceil(docsAmount / 10));
    };
    getAllDocs();
  }, []);

  useEffect(() => {
    let documents = [];
    const paginationQuery = async () => {
      if (page === 1) {
        const first = query(
          collection(db, "All_Images"),
          orderBy("createdAt"),
          limit(10)
        );

        const documentSnapshots = await getDocs(first);
        documentSnapshots.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setPageDocs(documents);
        setPage(1);
        setLastPageIndex(
          documentSnapshots.docs[documentSnapshots.docs.length - 1]
        );
      }
    };

    paginationQuery();
  }, [page]);

  const handleChange = (event, value) => {
    let documents = [];
    if (value > page) {
      const nextPagination = async () => {
        console.log(`value is ${value} and page is ${page}`);
        const next = query(
          collection(db, "All_Images"),
          orderBy("createdAt"),
          startAfter(lastPageIndex),
          limit(10)
        );
        const documentSnapshots = await getDocs(next);
        documentSnapshots.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setPageDocs(documents);
        setPage(value);
        setLastPageIndex(
          documentSnapshots.docs[documentSnapshots.docs.length - 1]
        );
      };
      nextPagination();
    }
    if (value < page) {
      console.log(`value is ${value} and page is ${page}`);
      const backPagination = async () => {
        const back = query(
          collection(db, "All_Images"),
          orderBy("createdAt"),
          endBefore(lastPageIndex),
          limit(10)
        );
        const documentSnapshots = await getDocs(back);
        documentSnapshots.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setPageDocs(documents);
        setPage(value);
        setLastPageIndex(
          documentSnapshots.docs[documentSnapshots.docs.length - 1]
        );
      };
      backPagination();
    }
  };
  const text = {
    h2: "Your Pictures",
    h6: "Share your Pictures with the World",
  };
  return (
    <ContainerWrapper>
      <Title text={text} />
      <HomeCards
        onSetImg={setImgData}
        onSetBackdrop={setBackdrop}
        onSetPageCount={setPageCount}
        docs={pageDocs}
        currentPage={page}
      />
      <Box
        sx={{
          m: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack spacing={2}>
          <Pagination count={pageCount} page={page} onChange={handleChange} />
        </Stack>
      </Box>
      {backdrop && (
        <Modal imgDocs={imgData} open={backdrop} onSetBackdrop={setBackdrop} />
      )}
    </ContainerWrapper>
  );
};

export default Home;
