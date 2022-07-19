import { Box } from "@mui/system";
import Link from "next/link";
import next, { GetServerSideProps } from "next";
import React, { useState, useEffect } from "react";
import ReactMapGL, {
  Marker,
  Popup,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl";
import { GiCat, GiSittingDog } from "react-icons/gi";
import { getPosts, createPost } from "../actions/posts";
import { useSelector, useDispatch, AnyIfEmpty } from "react-redux";
import { AppDispatch, RootState } from "../pages/_app";

export default function Map(strays: any) {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector((state: RootState) => state.posts);
  const [viewport, setViewPort] = useState({
    latitude: 14.5794,
    longitude: 121.0359,
    zoom: 11,
  });

  //get server side props from database
  const [straymarks, setStrayMarks] = useState([]);

  interface Straymarker {
    longitude: number;
    latitude: number;
    image: string;
    type: string;
    id: string;
  }

  const [selectedStray, setSelectedStray] = useState<Straymarker>({
    longitude: 0,
    latitude: 0,
    image: "",
    type: "",
    id: "",
  });
  const [showPopup, setShowPopup] = useState(false);


  const arr = strays.strays.strays;

  return (
    <ReactMapGL
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(evt) => setViewPort(evt.viewState)}
      mapStyle="mapbox://styles/dommmchan/cl4xmoduq004n15obtykzjlpt"
      style={{ width: "100%", height: "100%" }}
    >
      <NavigationControl position="top-right" />
      <GeolocateControl
        position="top-left"
        onGeolocate={(e) => console.log(e.coords)}
        showUserLocation={false}
      />

      {arr &&
        arr.map((marker: any) => {
          return (
            <Marker
              onClick={() => {
                setSelectedStray({
                  longitude: marker.longitude,
                  latitude: marker.latitude,
                  image: marker.strayImg,
                  type: marker.strayType,
                  id: marker._id,
                }),
                  setShowPopup(true);
              }}
              key={marker._id}
              style={{ cursor: "pointer" }}
              latitude={marker.latitude}
              longitude={marker.longitude}
            >
              {marker.strayType === "cat" ? (
                <h1>
                  <GiCat style={{ color: "rgb(208, 79, 231)"}}/>
                </h1>
              ) : (
                <h1>
                  <GiSittingDog style={{ color: "black"}}/>
                </h1>
              )}
            </Marker>
          );
        })}

      {showPopup && (
        <Popup
          closeButton={false}
          closeOnClick={false}
          closeOnMove={true}
          latitude={selectedStray.latitude}
          longitude={selectedStray.longitude}
          onClose={() => setShowPopup(false)}
        >
          <Link href={`stray/${selectedStray.id}`}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ outline: "none" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "60px",
                  height: "60px",
                }}
              >
                <img
                  src={selectedStray.image}
                  style={{
                    display: "block",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    alignSelf: "center",
                    justifySelf: "center",
                  }}
                />
              </div>
            </a>
          </Link>
        </Popup>
      )}
    </ReactMapGL>
  );
}
