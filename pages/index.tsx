import type { NextPage, GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import CustomModal from "../components/CustomModal";
import {
  ThemeProvider,
  createTheme,
  Box,
  Button,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import customTheme from "../styles/theme";
import Map from "../components/Map";
import useMediaQuery from "@mui/material/useMediaQuery";
import Inputmap from "../components/Inputmap";

const Home: NextPage = (strays) => {
  
  const matches: boolean = useMediaQuery("(min-width:400px)");
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.Home}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <Navbar setOpenModal={setOpenModal} showButton={true} strayPage="map" />
        <div
          className={matches ? styles.desktop : styles.mobile}
          onClick={() => setOpenModal(false)}
        >
          <Map strays={strays}/>
        </div>

        {openModal && (
          <>
            <div
              onClick={() => setOpenModal(false)}
              className={styles.dblur}
            ></div>
            <CustomModal />
          </>
        )}
      
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://straymap.herokuapp.com/posts");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      strays: data,
    },
  };
};

export default Home;
