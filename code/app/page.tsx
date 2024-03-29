import Image, { StaticImageData } from "next/image";
import HomePageTable from "./_components/HomePageTable";
import LatestNewsCard from "./_components/LatestNewsCard";


export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col md:flex-row w-full space-between justify-between px-4">
        <div className="ml-2 mr-4"><LatestNewsCard /></div>
        
        <div className="ml-4 mr-2"><HomePageTable /></div>
      </div>
      <div>
        <p>dscxc</p>
      </div>




    </div>
  );
}
