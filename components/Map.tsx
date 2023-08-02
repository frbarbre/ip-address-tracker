"use client";

import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import Leaflet from "leaflet";

const pointerIcon = new Leaflet.Icon({
  iconUrl: "/icon-location.svg",
  iconSize: [46, 56],
  iconAnchor: [20, 58],
});

export default function Map({ location }: { location: LatLngExpression }) {
  return (
    <MapContainer
      center={location}
      zoom={13}
      scrollWheelZoom={true}
      className="h-map-mobile md:h-map-desktop"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={location} icon={pointerIcon}></Marker>
    </MapContainer>
  );
}
