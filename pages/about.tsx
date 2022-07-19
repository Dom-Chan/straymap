import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { Typography, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import CustomModal from "../components/CustomModal";

const About: NextPage = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Navbar setOpenModal={setOpenModal} strayPage="about" showButton={true} />
      {openModal && (
        <>
          <div
            onClick={() => setOpenModal(false)}
            className={styles.dblur}
          ></div>
          <CustomModal setOpenModal={setOpenModal}/>
        </>
      )}
      <Typography variant="h5">This project is a way of practicing the Next.js framework. Information shown is just for display purposes. Contact the developer for details. Email: dominic_chan@dlsu.edu.ph</Typography>
    </>
  );
};

export default About;
