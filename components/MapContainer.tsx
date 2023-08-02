import { LatLngExpression } from "leaflet";
import Map from "./Map";
import Info from "./Info";
import { IPLocation } from "@/types";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("@/components/Map"), { ssr: false });

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
      <DynamicMap location={location} />
    </div>
  );
}
