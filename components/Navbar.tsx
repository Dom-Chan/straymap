import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import AppBar from "@mui/material/AppBar";
import {
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Button,
  Fab,
  Container,
  Box,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import InfoIcon from "@mui/icons-material/Info";
import PetsIcon from "@mui/icons-material/Pets";
import useMediaQuery from "@mui/material/useMediaQuery";
import MapTwoToneIcon from "@mui/icons-material/MapTwoTone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";

function Navbar({ setOpenModal, showButton, strayPage }) {
  const [value, setValue] = useState(strayPage);
  const matches = useMediaQuery("(min-width:400px)");
  const matchesB = useMediaQuery("(min-width:800px)");
  const router = useRouter();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div>
      {matches ? (
        <AppBar color="primary" position="static" sx={{}}>
          <Toolbar variant="regular">
            <PetsIcon sx={{ mr: "5px" }} />
            <Container>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                sx={{
                  "& .MuiTabs-indicator": {
                    borderRadius: "6px",
                    height: 1,
                    opacity: 1 / 4,
                  },
                }}
              >
                <Tab
                  onClick={() => {
                    setOpenModal(false), router.push("/");
                  }}
                  sx={{
                    fontWeight: "600",
                  }}
                  label="STRAYMAP"
                  value="map"
                />

                <Tab
                  onClick={() => {
                    setOpenModal(false), router.push("/about");
                  }}
                  sx={{
                    fontWeight: "600",
                  }}
                  label="ABOUT"
                  value="about"
                />
              </Tabs>
            </Container>
            {showButton && (
              <Button
                onClick={() => setOpenModal(true)}
                variant="contained"
                color="secondary"
                sx={{
                  marginLeft: "auto",
                  display: { xs: "none", sm: "flex" },
                  fontWeight: "600",
                  whiteSpace: "nowrap",
                }}
              >
                {matchesB ? "SPOTTED A STRAY?" : "STRAY?"}
              </Button>
            )}
          </Toolbar>
        </AppBar>
      ) : (
        <>
          <AppBar
            position="fixed"
            color="primary"
            sx={{ top: "auto", bottom: 0 }}
          >
            <Toolbar variant="regular">
              <Container>
                <Tabs
                  centered
                  value={value}
                  onChange={handleChange}
                  textColor="secondary"
                  indicatorColor="primary"
                  sx={{
                    "& .MuiTabs-indicator": {
                      height: 0,
                      opacity: 0,
                    },
                  }}
                >
                  <Tab
                    icon={<MapTwoToneIcon />}
                    value="map"
                    sx={{ minWidth: "30px", marginX: "10px" }}
                    onClick={() => {
                      setOpenModal(false), router.push("/");
                    }}
                  />

                  <Button onClick={() => setOpenModal(true)}>
                    <AddCircleIcon fontSize="large" />
                  </Button>
                  <Tab
                    icon={<InfoIcon />}
                    value="contact"
                    sx={{ minWidth: "30px", marginX: "10px" }}
                  />
                </Tabs>
              </Container>
            </Toolbar>
          </AppBar>
        </>
      )}
    </div>
  );
}

export default Navbar;
