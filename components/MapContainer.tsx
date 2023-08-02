import { LatLngExpression } from "leaflet";
import Map from "./Map";
import Info from "./Info";
import { IPLocation } from "@/types";

export default function MapContainer({
  location,
  data,
}: {
  location: LatLngExpression;
  data: IPLocation;
}) {
  return (
    <div className="relative">
      <div className="absolute top-0 left-[24px] right-[24px] z-[1001] translate-y-[-40%] md:translate-y-[-50%] flex justify-center">
        <Info
          ip={data.ip}
          location={data.location.city}
          region={data.location.region}
          zipCode={data.location.postalCode}
          timezone={data.location.timezone}
          isp={data.isp}
          country={data.location.country}
        />
      </div>
      <Map location={location} />
    </div>
  );
}
