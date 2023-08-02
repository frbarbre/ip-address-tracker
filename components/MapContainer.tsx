import { LatLngExpression } from "leaflet";
import Map from "./Map";

export default function MapContainer({
  location,
}: {
  location: LatLngExpression;
}) {
  return <Map location={location} />;
}
