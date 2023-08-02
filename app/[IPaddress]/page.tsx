import MapContainer from "@/components/MapContainer";
import { IPLocation } from "@/types";
import { LatLngExpression } from "leaflet";

export default async function Search({
  params,
}: {
  params: { IPaddress: string };
}) {
  const searchIpData = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.API_KEY}&ipAddress=${params.IPaddress}`
  );
  const searchIpResult = (await searchIpData.json()) as IPLocation;

  const location: LatLngExpression = [
    searchIpResult?.location?.lat,
    searchIpResult?.location?.lng,
  ];

  return (
    <div>
      {searchIpResult?.ip ? (
        <MapContainer location={location} data={searchIpResult} />
      ) : (
        <h2>Error: {params.IPaddress} is not a valid IP Address</h2>
      )}
    </div>
  );
}
