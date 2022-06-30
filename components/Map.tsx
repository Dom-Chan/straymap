import { Box } from "@mui/system";
import React, { useState } from "react";
import ReactMapGL, {Marker, Popup, GeolocateControl, NavigationControl} from "react-map-gl";

export default function Map() {
  const [viewport, setViewPort] = useState({
    latitude: 14.5378,
    longitude: 121.0014,
    zoom: 11,
  });

  const geolocateControlRef = React.useCallback((ref) => {
    if (ref) {
      // Activate as soon as the control is loaded
      ref.trigger();
    }
  }, []);

  return (
    <ReactMapGL
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={evt=>setViewPort(evt.viewState)}
      mapStyle="mapbox://styles/dommmchan/cl4xmoduq004n15obtykzjlpt"
      style={{width: '100%', height: '100%'}}
    >
        <NavigationControl position="bottom-right"/>
        <GeolocateControl position="top-left" />
        <Marker latitude={14.5378} longitude={121.0014} color='red' >
        
        </Marker>
    </ReactMapGL>
  );
}
