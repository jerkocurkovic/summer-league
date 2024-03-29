import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import logo from "@/app/icon.ico"



const Logo: FC = () => (
  <div className="flex flex-row items-center justify-between max-w-min gap-2 ml-4 bg-opacity-0">
    <Image
      src={logo}
      width={90}
      height={90}
      alt="Card header"
    />
    <div className="flex flex-col justify-center items-center">
      <p className="font-blackopsone text-2xl whitespace-nowrap">
        LJETNA
      </p>
      <p className="font-blackopsone text-2xl whitespace-nowrap pl-3">
        LIGA
      </p>
    </div>
  </div>
);

export default Logo;
