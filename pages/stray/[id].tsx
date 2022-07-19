import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { GiCat, GiSittingDog } from "react-icons/gi";
import ReactMapGL, {
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl,
} from "react-map-gl";
import { NextPage } from "next";
import { Typography, Box } from "@mui/material";
import styles from "../../styles/strayPage.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import Navbar from "../../components/Navbar";

const Id: NextPage = () => {
  const router = useRouter();
  const [stray, setStray] = useState<any>();
  const [openModal, setOpenModal] = useState<any>(false);
  const [openImgModal, setOpenImgModal] = useState<any>(false);
  const matches = useMediaQuery("(min-width:400px)");
  const [viewport, setViewPort] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 16,
  });

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      axios
        .get(`https://straymap.herokuapp.com/posts/${id}`)
        .then((res) => {
          setStray(res.data[0]),
            setViewPort({
              latitude: res.data[0].latitude,
              longitude: res.data[0].longitude,
              zoom: 14,
            });
        })
        .catch((err) => {
          console.log(err);
        });
    } else console.log("not ready");
  }, [router]);

  return (
    <>
      <div className={styles.mainCon}>
        {router.isReady && stray && (
          <>
            <ReactMapGL
              {...viewport}
              mapboxAccessToken={process.env.mapbox_key}
              mapStyle="mapbox://styles/dommmchan/cl4xmoduq004n15obtykzjlpt"
              style={{ width: "100%", height: "100%" }}
              onMove={(evt) => setViewPort(evt.viewState)}
            >
              {matches && (
                <>
                  <NavigationControl position="top-right" />{" "}
                  <GeolocateControl
                    position="top-left"
                    onGeolocate={(e) => console.log(e.coords)}
                  />
                </>
              )}
              <Marker
                key={stray._id}
                style={{ cursor: "pointer" }}
                latitude={stray.latitude}
                longitude={stray.longitude}
                onClick={() => setOpenImgModal(true)}
              >
                {stray.strayType === "cat" ? (
                  <h1>
                    <GiCat style={{ color: "rgb(208, 79, 231)"}}/>
                  </h1>
                ) : (
                  <h1>
                    <GiSittingDog />
                  </h1>
                )}
              </Marker>
            </ReactMapGL>

            {openImgModal && (
              <div
                className={matches ? styles.imageModalD : styles.imageModalM}
                onClick={() => setOpenImgModal(false)}
              >
                <img
                  src={stray.strayImg}
                  style={{
                    display: "block",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    alignSelf: "center",
                  }}
                />
              </div>
            )}

            <div
              className={matches ? styles.strayDetails : styles.strayDetailsM}
            >
              <Typography variant={matches ? "h5" : "subtitle1"} >
                {stray.description}
              </Typography>
              <Typography variant={matches ? "h6" : "subtitle2"} alignSelf="flex-end">
                {stray.creator}
              </Typography>
              <Typography variant={matches ? "h6" : "subtitle2"} alignSelf="flex-end">
                {stray.contact}
              </Typography>
            </div>
          </>
        )}
      </div>
     
    </>
  );
};

export default Id;
