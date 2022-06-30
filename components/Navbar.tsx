import React from "react";
import { useState } from "react";
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
import PetsIcon from "@mui/icons-material/Pets";
import useMediaQuery from "@mui/material/useMediaQuery";
import MapTwoToneIcon from "@mui/icons-material/MapTwoTone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";


function Navbar() {
  const [value, setValue] = useState("map");
  const matches = useMediaQuery("(min-width:400px)");

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
                  centered
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
                    sx={{
                      fontWeight: "600",
                    }}
                    label="STRAYMAP"
                    value="map"
                  />
                  <Tab
                    sx={{
                      fontWeight: "600",
                    }}
                    label="FOUND"
                    value="found"
                  />
                  <Tab
                    sx={{
                      fontWeight: "600",
                    }}
                    label="ABOUT"
                    value="about"
                  />
                  <Tab
                    sx={{
                      fontWeight: "600",
                    }}
                    label="CONTACT US"
                    value="contact"
                  />
                </Tabs>
              </Container>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  marginLeft: "auto",
                  display: { xs: "none", xl: "flex", lg: "flex", md: "flex" },
                  fontWeight: "600",
                  whiteSpace: "nowrap"
                }}
              >
                SPOTTED A STRAY?
              </Button>
            </Toolbar>
          </AppBar>
        ) : (
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
                    sx={{ minWidth: "30px" , marginX: "10px"}}
                  />
                  <Tab
                    icon={<FavoriteIcon />}
                    value="found"
                    sx={{ minWidth: "30px" , marginX: "10px" }}
                  />
                  <Tab
                    icon={<PersonPinIcon />}
                    value="about"
                    sx={{ minWidth: "30px" , marginX: "10px"}}
                  />
                </Tabs>
              </Container>
            </Toolbar>
          </AppBar>
        )}

    </div>
  );
}

export default Navbar;
