import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// Importă CSS-ul Leaflet aici dacă nu este deja importat global o singură dată
// Dacă este importat global (ex: în main.jsx), poți comenta/șterge linia de mai jos
import "leaflet/dist/leaflet.css";
import L from "leaflet"; // Importă obiectul Leaflet principal

// Resetarea iconiței default a Leaflet pentru a funcționa corect cu module și bundlere
// Se execută o singură dată la încărcarea modulului
if (typeof window !== "undefined") {
  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    // Folosește căi absolute din folderul public
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
  mapClassName = "", // Adăugăm o valoare default pentru a evita erori dacă nu e pasată
  style, // Permite pasarea unui obiect de stil inline dacă e necesar
}) {
  // Placeholder pentru SSR/build sau dacă window nu e definit încă
  if (typeof window === "undefined") {
    return (
      <div
        className={mapClassName}
        style={{
          height: "300px", // O înălțime default pentru placeholder
          background: "#e9ecef",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#6c757d",
          borderRadius: "var(--border-radius)", // Folosim variabilele CSS dacă sunt definite
          ...style, // Permite suprascrierea stilului
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
      className={mapClassName} // Clasa pentru stilizarea containerului hărții
      style={style} // Stiluri inline pentru containerul hărții
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
