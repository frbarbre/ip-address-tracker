import MapContainer from "@/components/MapContainer";
import { IPLocation } from "@/types";
import { LatLngExpression } from "leaflet";

export default async function Home() {
  const ipDefaultLocation = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.API_KEY}`
  );
  const ipDefaultResult = (await ipDefaultLocation.json()) as IPLocation;

  const location: LatLngExpression = [
    ipDefaultResult?.location?.lat,
    ipDefaultResult?.location?.lng,
  ];

  return (
    <div>
      {ipDefaultResult?.ip ? (
        <MapContainer location={location} data={ipDefaultResult} />
      ) : (
        <h2>Error: Try again later</h2>
      )}
    </div>
  );
}
