
import React, { useEffect, useState, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { mapBoxToken } from "../../config/keys_dev";

const ParkMap = (props) => {
  const long = -122.44;
  const lat = 37.76;
  const zoom = 11;

  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = mapBoxToken;
    const bounds = [
      [-122.54, 37.6], // [west, south]
      [-122.34, 37.9], // [east, north]
    ];

    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current, // container id
        style: "mapbox://styles/mapbox/streets-v11",
        center: [long, lat], // starting position
        zoom: zoom, // starting zoom
      });
      map.addControl(new mapboxgl.NavigationControl());
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
        })
      );
      map.setMaxBounds(bounds);
      setMap(map);
    };
    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  // Add zoom and rotation controls to the map.

  return (
    <div className="outer-map-container" >
      <div> Nearby Parks </div>
      <div
        ref={(el) => (mapContainer.current = el)}
        className="map-container"
      />
    </div>
  );
};

export default ParkMap;
