import React, { FormEventHandler } from "react";
import styles from "../styles/modal.module.css";
import { useEffect, useState } from "react";
import {
  ThemeProvider,
  createTheme,
  Box,
  Button,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import useMediaQuery from "@mui/material/useMediaQuery";
import { getPosts, createPost } from "../actions/posts";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../pages/_app";
import FileBase from "react-file-base64";
import ReactMapGL, {
  Marker,
  Popup,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl";
import theme from ".././styles/theme";
import { MdLabel, MdSend } from "react-icons/md";

interface modalProps {
  setOpenModal: any;
}

export default function CustomModal({setOpenModal}: modalProps) {
  const matchesW: boolean = useMediaQuery("(min-width:400px)");
  const matchesH: boolean = useMediaQuery("(min-height:750px)");
  const posts = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch<AppDispatch>();
  const [fileErr, setFileErr] = useState(true);
  const [postData, setPostData] = useState({
    strayType: "",
    contact: "",
    description: "",
    strayId: "",
    creator: "",
    strayImg: "",
    password: "",
    latitude: 0,
    longitude: 0,
  });
  const [viewport, setViewPort] = useState({
    latitude: 14.5794,
    longitude: 121.0359,
    zoom: 11,
  });

  interface Straymarker {
    longitude: number;
    latitude: number;
    type: string;
  }

  const [selectedStray, setSelectedStray] = useState<Straymarker>({
    longitude: 0,
    latitude: 0,
    type: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      postData.contact !== "" &&
      postData.creator !== "" &&
      postData.description !== "" &&
      postData.strayImg !== "" &&
      postData.password !== "" &&
      postData.latitude !== 0 &&
      postData.longitude !== 0
    ) {
      dispatch(createPost(postData)),
    } else window.alert("Please fill all required fields");
  };

  const handlePoint = (e: any) => {
    setPostData({
      ...postData,
      longitude: e.lngLat.lng,
      latitude: e.lngLat.lat,
      strayId: `${e.lngLat.lat}-${postData.strayType}${e.lngLat.lng}`,
    }),
      setSelectedStray({
        longitude: e.lngLat.lng,
        latitude: e.lngLat.lat,
        type: postData.strayType,
      });
  };

  const len = (str: any) => {
    let size = Buffer.from(str).length;
    return size;
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={matchesW && matchesH ? styles.modalD : styles.modalM}>
       
        <div className={matchesW ? styles.mapContainerD : styles.mapContainerM}>
          <ReactMapGL
            cursor="pointer"
            mapboxAccessToken={process.env.mapbox_key}
            {...viewport}
            onMove={(evt) => setViewPort(evt.viewState)}
            mapStyle="mapbox://styles/dommmchan/cl4xmoduq004n15obtykzjlpt"
            style={{ width: "100%", height: "100%", borderRadius: "10px" }}
            onClick={(e) => handlePoint(e)}
          >
            {matchesW && <NavigationControl position="bottom-right" />}
            <GeolocateControl
              position="top-left"
              onGeolocate={(e) => console.log(e.coords)}
              showUserLocation={false}
            />

            {selectedStray && (
              <Marker
                longitude={selectedStray.longitude}
                latitude={selectedStray.latitude}
              />
            )}
          </ReactMapGL>
        </div>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <TextField
            required
            style={{ marginBottom: "8px", position: "relative" }}
            fullWidth
            name="creator"
            variant="outlined"
            label="email"
            value={postData.creator}
            onChange={(e) => {
              setPostData({ ...postData, creator: e.target.value });
            }}
          />
          <TextField
            required
            style={{ marginBottom: "8px", position: "relative" }}
            fullWidth
            name="contact"
            variant="outlined"
            label="contact number"
            value={postData.contact}
            onChange={(e) => {
              setPostData({ ...postData, contact: e.target.value });
            }}
          />
          <TextField
            required
            style={{ marginBottom: "8px", position: "relative" }}
            fullWidth
            multiline={true}
            minRows={3}
            name="description"
            variant="outlined"
            label="description"
            value={postData.description}
            onChange={(e) => {
              setPostData({ ...postData, description: e.target.value });
            }}
          />
          <RadioGroup
            aria-required
            style={{ position: "relative" }}
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="dog"
            name="radio-buttons-group"
            value={postData.strayType}
            onChange={(e) =>
              setPostData({ ...postData, strayType: e.target.value })
            }
          >
            <FormControlLabel value="dog" control={<Radio />} label="dog" />
            <FormControlLabel value="cat" control={<Radio />} label="cat" />
          </RadioGroup>
          <div className={styles.fileCon}>
            <div
              className={styles.file}
              style={{ position: "relative" }}
            >
              <AddAPhotoIcon style={{ opacity: "50%" }} />
              <FileBase
                id="file"
                type="file"
                multiple={false}
                onDone={(base64: any) => {
                  console.log(base64)
                  if (len(base64.base64) > 100000) {
                    setFileErr(true);
                  } 
                  else {
                    setFileErr(false),
                      setPostData({ ...postData, strayImg: base64.base64 });
                  }
                }}
              />
              
            </div>
            {fileErr ? <CancelIcon style={{ color: "red" }} /> : <CheckCircleIcon style={{ color: "#4fc3f7" }}/>}
          </div>

          <TextField
            required
            style={{ marginBottom: "8px", position: "relative" }}
            fullWidth
            name="password"
            variant="outlined"
            label="password"
            value={postData.password}
            onChange={(e) => {
              setPostData({ ...postData, password: e.target.value }),
                console.log(len(postData.strayImg));
            }}
          />
          <Box display="flex" justifyContent="flex-end" onClick={()=>setOpenModal(false)}>
            <Button
              sx={{ borderRadius: "10px" }}
              type="submit"
              variant="contained"
            >
              <MdSend />
            </Button>
          </Box>
        </form>
      </div>
    </>
  );
}
