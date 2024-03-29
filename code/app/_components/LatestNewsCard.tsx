import Image, { StaticImageData } from "next/image";
import latestNews from "@/public/json/latestNews.json"
import image from "@/public/winners/asMotorsport2023.jpeg"


export default function LatestNewsCard() {
    return (
        <div className= "relative mx-auto overflow-hidden mt-2">
            <div>
                <Image
                className="w-full h-60 object-cover object-center"
                width={700}
                height={700}
                src={image}
                alt="Card header"
                />
            </div>
            <div className="">
                <div className="mb-8">
                    <h2 className="text-2xl font-abeezee font-bold text-brand-black-500 mb-4">
                    {latestNews["latest News"].title}
                    </h2>
                    <p className="font-abeezee text-brand-black-500 leading-6">{latestNews["latest News"].shortText}</p>
                </div>
        </div>
      </div>
  );
}
