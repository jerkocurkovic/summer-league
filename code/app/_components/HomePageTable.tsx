import Image, { StaticImageData } from "next/image";
import imageTrophy from "@/app/icon.ico"
import tabledata from "@/public/json/table.json"

const rowBaseClass = "px-4"


export default function HomePageTable() {
  return (
    <div className="flex flex-col min-h-screen items-center">

        <div className="flex flex-row my-1">
            <Image 
                src={imageTrophy}
                alt="Picture of the trophy"
                width={20}
                height={20}
            />
            <p className="font-blackopsone">V LJETNA LIGA</p>
        </div>
        <table className="shadow-md">
            <thead>
                <tr>
                    <th className="bg-brand-red-300">#</th>
                    <th className="bg-brand-red-300">Ekipa</th>
                    <th className="bg-brand-red-300">Uk</th>
                    <th className="bg-brand-red-300">Pob</th>
                    <th className="bg-brand-red-300">Ner</th>
                    <th className="bg-brand-red-300">Por</th>
                    <th className="bg-brand-red-300">GR</th>
                    <th className="bg-brand-red-300">Bod</th>
                </tr>
            </thead>
            <tbody className="mx-2">
                <tr className="border-b-2 border-brand-red-300">
                    <td className={rowBaseClass}>1.</td>
                    <td className={rowBaseClass}>{tabledata["pozicija 1"].ime_ekipe}</td>
                    <td className={rowBaseClass}>{tabledata["pozicija 1"].odigrane_utakmice}</td>
                    <td className={rowBaseClass}>{tabledata["pozicija 1"].pobjede}</td>
                    <td className={rowBaseClass}>{tabledata["pozicija 1"].nerjesene}</td>
                    <td className={rowBaseClass}>{tabledata["pozicija 1"].porazi}</td>
                    <td className={rowBaseClass}>{tabledata["pozicija 1"].gol_razlika}</td>
                    <td className={rowBaseClass}>{tabledata["pozicija 1"].bodovi}</td>
                </tr>
                <tr>
                    <td className={rowBaseClass}>2.</td>
                    <td className={rowBaseClass}>{tabledata["pozicija 2"].ime_ekipe}</td>
                    <td className={rowBaseClass}>{tabledata["pozicija 2"].odigrane_utakmice}</td>
                    <td className={rowBaseClass}>{tabledata["pozicija 2"].pobjede}</td>
                    <td className={rowBaseClass}>{tabledata["pozicija 2"].nerjesene}</td>
                    <td className={rowBaseClass}>{tabledata["pozicija 2"].porazi}</td>
                    <td className={rowBaseClass}>{tabledata["pozicija 2"].gol_razlika}</td>
                    <td className={rowBaseClass}>{tabledata["pozicija 2"].bodovi}</td>
                </tr>
                <tr>
                    <td className={rowBaseClass}>3.</td>
                    <td className={rowBaseClass}>{tabledata["pozicija 3"].ime_ekipe}</td>
                    <td className={rowBaseClass}>{tabledata["pozicija 3"].odigrane_utakmice}</td>
                    <td className={rowBaseClass}>{tabledata["pozicija 3"].pobjede}</td>
                    <td className={rowBaseClass}>{tabledata["pozicija 3"].nerjesene}</td>
                    <td className={rowBaseClass}>{tabledata["pozicija 3"].porazi}</td>
                    <td className={rowBaseClass}>{tabledata["pozicija 3"].gol_razlika}</td>
                    <td className={rowBaseClass}>{tabledata["pozicija 3"].bodovi}</td>
                </tr>
                <tr>
                    <td className={rowBaseClass}>4.</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 4"].ime_ekipe}</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 4"].odigrane_utakmice}</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 4"].pobjede}</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 4"].nerjesene}</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 4"].porazi}</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 4"].gol_razlika}</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 4"].bodovi}</td>
                </tr>
                <tr>
                     <td className={rowBaseClass}>5.</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 5"].ime_ekipe}</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 5"].odigrane_utakmice}</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 5"].pobjede}</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 5"].nerjesene}</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 5"].porazi}</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 5"].gol_razlika}</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 5"].bodovi}</td>
                </tr>
                <tr>
                     <td className={rowBaseClass}>6.</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 6"].ime_ekipe}</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 6"].odigrane_utakmice}</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 6"].pobjede}</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 6"].nerjesene}</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 6"].porazi}</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 6"].gol_razlika}</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 6"].bodovi}</td>
                </tr>
                <tr>
                     <td className={rowBaseClass}>7.</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 7"].ime_ekipe}</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 7"].odigrane_utakmice}</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 7"].pobjede}</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 7"].nerjesene}</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 7"].porazi}</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 7"].gol_razlika}</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 7"].bodovi}</td>
                </tr>
                <tr>
                     <td className={rowBaseClass}>8.</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 8"].ime_ekipe}</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 8"].odigrane_utakmice}</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 8"].pobjede}</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 8"].nerjesene}</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 8"].porazi}</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 8"].gol_razlika}</td>
                     <td className={rowBaseClass}>{tabledata["pozicija 8"].bodovi}</td>
                </tr>
            
            </tbody>
        </table>

    </div>
  );
}
