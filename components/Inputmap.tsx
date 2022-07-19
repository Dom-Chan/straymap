import { Box } from "@mui/system";
import Link from "next/link";
import React, { useState } from "react";
import ReactMapGL, {
  Marker,
  Popup,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl";
import {
  ThemeProvider,
  createTheme,
  Button,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Inputmap() {
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
    type: "any",
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        overflowY: 'scroll',
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "red",
        zIndex: 2
      }}
    >
      <ReactMapGL
        mapboxAccessToken={process.env.mapbox_key}
        {...viewport}
        onMove={(evt) => setViewPort(evt.viewState)}
        mapStyle="mapbox://styles/dommmchan/cl4xmoduq004n15obtykzjlpt"
        style={{ width: "100%", height: "100%" }}
      >
        <NavigationControl position="bottom-right" />
        <GeolocateControl
          position="top-left"
          onGeolocate={(e) => console.log(e.coords)}
          showUserLocation={false}
        />
      </ReactMapGL>

      <form autoComplete="off" noValidate>
        <Typography variant="h5" style={{ marginBottom: "8px" }}>
          Spotted a Stray?
        </Typography>
        <TextField
          style={{ marginBottom: "8px", position: "relative" }}
          fullWidth
          name="creator"
          variant="outlined"
          label="email"
        />
        <TextField
          style={{ marginBottom: "8px", position: "relative" }}
          fullWidth
          name="contact"
          variant="outlined"
          label="contact number"
        />
        <TextField
          style={{ marginBottom: "8px", position: "relative" }}
          fullWidth
          multiline={true}
          minRows={3}
          name="description"
          variant="outlined"
          label="description"
        />
        <RadioGroup
          style={{ position: "relative" }}
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="dog"
          name="radio-buttons-group"
        >
          <FormControlLabel value="dog" control={<Radio />} label="dog" />
          <FormControlLabel value="cat" control={<Radio />} label="cat" />
        </RadioGroup>

        <TextField
          style={{ marginBottom: "8px", position: "relative" }}
          fullWidth
          name="password"
          variant="outlined"
          label="password"
        />




<Typography variant="h5" style={{ marginBottom: "8px" }}>
          Spotted a Stray?
        </Typography>
        <TextField
          style={{ marginBottom: "8px", position: "relative" }}
          fullWidth
          name="creator"
          variant="outlined"
          label="email"
        />
        <TextField
          style={{ marginBottom: "8px", position: "relative" }}
          fullWidth
          name="contact"
          variant="outlined"
          label="contact number"
        />
        <TextField
          style={{ marginBottom: "8px", position: "relative" }}
          fullWidth
          multiline={true}
          minRows={3}
          name="description"
          variant="outlined"
          label="description"
        />
        <RadioGroup
          style={{ position: "relative" }}
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="dog"
          name="radio-buttons-group"
        >
          <FormControlLabel value="dog" control={<Radio />} label="dog" />
          <FormControlLabel value="cat" control={<Radio />} label="cat" />
        </RadioGroup>

        <TextField
          style={{ marginBottom: "8px", position: "relative" }}
          fullWidth
          name="password"
          variant="outlined"
          label="password"
        />
        <Typography variant="h5" style={{ marginBottom: "8px" }}>
          Spotted a Stray?
        </Typography>
        <TextField
          style={{ marginBottom: "8px", position: "relative" }}
          fullWidth
          name="creator"
          variant="outlined"
          label="email"
        />
        <TextField
          style={{ marginBottom: "8px", position: "relative" }}
          fullWidth
          name="contact"
          variant="outlined"
          label="contact number"
        />
        <TextField
          style={{ marginBottom: "8px", position: "relative" }}
          fullWidth
          multiline={true}
          minRows={3}
          name="description"
          variant="outlined"
          label="description"
        />
        <RadioGroup
          style={{ position: "relative" }}
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="dog"
          name="radio-buttons-group"
        >
          <FormControlLabel value="dog" control={<Radio />} label="dog" />
          <FormControlLabel value="cat" control={<Radio />} label="cat" />
        </RadioGroup>

        <TextField
          style={{ marginBottom: "8px", position: "relative" }}
          fullWidth
          name="password"
          variant="outlined"
          label="password"
        />
        <Typography variant="h5" style={{ marginBottom: "8px" }}>
          Spotted a Stray?
        </Typography>
        <TextField
          style={{ marginBottom: "8px", position: "relative" }}
          fullWidth
          name="creator"
          variant="outlined"
          label="email"
        />
        <TextField
          style={{ marginBottom: "8px", position: "relative" }}
          fullWidth
          name="contact"
          variant="outlined"
          label="contact number"
        />
        <TextField
          style={{ marginBottom: "8px", position: "relative" }}
          fullWidth
          multiline={true}
          minRows={3}
          name="description"
          variant="outlined"
          label="description"
        />
        <RadioGroup
          style={{ position: "relative" }}
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="dog"
          name="radio-buttons-group"
        >
          <FormControlLabel value="dog" control={<Radio />} label="dog" />
          <FormControlLabel value="cat" control={<Radio />} label="cat" />
        </RadioGroup>

        <TextField
          style={{ marginBottom: "8px", position: "relative" }}
          fullWidth
          name="password"
          variant="outlined"
          label="password"
        />
        <Button
          style={{ position: "relative" }}
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
