import { nanoid } from "nanoid";

type Props = {
  ip: string;
  location: string;
  region: string;
  zipCode: string;
  timezone: string;
  isp: string;
  country: string;
};

interface info {
  title: string;
  content: string;
}

export default function Info({
  ip,
  location,
  region,
  zipCode,
  timezone,
  isp,
  country,
}: Props) {
  const regionSplit = region.split(" ");
  let regionShortName = "";

  for (let i = 0; i < regionSplit.length; i++) {
    const letter = regionSplit[i].slice(0, 1);
    regionShortName += letter;
  }

  const info: info[] = [
    {
      title: "IP Address",
      content: ip,
    },
    {
      title: "Location",
      content: `${location}, ${regionShortName}${
        zipCode === "" ? "" : " "
      }${zipCode}, ${country}`,
    },
    {
      title: "Timezone",
      content: `UTC ${timezone}`,
    },
    {
      title: "ISP",
      content: isp,
    },
  ];

  return (
    <div className="flex bg-white flex-col md:flex-row max-w-[555px] md:max-w-[1110px] w-full justify-between items-center md:items-start gap-x-[32px] gap-y-[24px] md:h-[161px] rounded-[15px] shadow-3xl pt-[26px] md:pt-[37px] md:pb-[37px] pb-[24px] px-[32px]">
      {info.map((data, index) => (
        <>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-[10px] font-bold tracking-[1.46] text-gray/50 uppercase pb-[7px] md:text-[12p×] md:tracking-[1.75px] md:pb-[13px]">
              {data.title}
            </h2>
            <h3 className="text-[20px] text-gray font-medium tracking-[-0.18px] md:text-[26px] md:tracking-[-0.23px]">{data.content}</h3>
          </div>
          {index !== info.length - 1 && (
            <div className="h-full w-[1px] py-[6px] bg-black/20 hidden md:block" />
          )}
        </>
      ))}
    </div>
  );
}
