import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import L from "leaflet"; 

// Resetarea iconitei default a Leaflet pentru a functiona corect cu module si bundlere
// Se execută o singura data la incarcarea modulului
if (typeof window !== "undefined") {
  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
   
    iconRetinaUrl: "/leaflet-images/marker-icon-2x.png",
    iconUrl: "/leaflet-images/marker-icon.png",
    shadowUrl: "/leaflet-images/marker-shadow.png",
  });
}

function InteractiveMap({
  position,
  zoom = 15,
  popupText,
  scrollWheelZoom = false,
  mapClassName = "", 
  style, 
}) {
  // Placeholder pentru SSR/build sau daca window nu e definit înca
  if (typeof window === "undefined") {
    return (
      <div
        className={mapClassName}
        style={{
          height: "300px", 
          background: "#e9ecef",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#6c757d",
          borderRadius: "var(--border-radius)", 
          ...style, 
        }}
      >
        Loading map...
      </div>
    );
  }

  const isValidPosition =
    Array.isArray(position) &&
    position.length === 2 &&
    typeof position[0] === "number" &&
    typeof position[1] === "number";

  if (!isValidPosition) {
    console.error(
      "InteractiveMap: Invalid 'position' prop provided.",
      position
    );
    return (
      <div
        className={mapClassName}
        style={{
          height: "300px",
          background: "#f8d7da",
          color: "#721c24",
          padding: "10px",
          border: "1px solid #f5c6cb",
          borderRadius: "var(--border-radius)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...style,
        }}
      >
        Error: Invalid map coordinates provided.
      </div>
    );
  }

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={scrollWheelZoom}
      className={mapClassName} 
      style={style} 
    >
      <TileLayer
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        {popupText && <Popup>{popupText}</Popup>}
      </Marker>
    </MapContainer>
  );
}

export default InteractiveMap;
