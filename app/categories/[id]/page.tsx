import Navbar from "@/app/components/Navbar";
import {getExp} from "@/app/lib/Exp";
import Link from "next/link";

const VideosPage = ({params}: {params: {id: string}}) => {
  const experiments: any[] = getExp(params.id);

  return (
    <main className="bg-[#151515]">
      <div className="px-2 md:px-6 py-2 md:py-6 min-h-screen bg-cover bg-[url('/color-sharp.png')] bg-right-bottom">
        <div className="w-[96vw] mx-auto">
          <Navbar />
        </div>

        <div className="w-[90vw] mx-auto py-10">
          <div className="flex flex-wrap justify-center md:justify-start">
            {experiments &&
              experiments.map((exp, index) => (
                <div key={index} className="p-2 w-full sm:w-1/2 md:w-1/3">
                  <div className="card bg-base-100 shadow-xl image-full max-h-80">
                    <figure className="w-full overflow-hidden">
                      <img
                        src={`/${params.id}/${
                          params.id !== "mechanical" ? exp.EXP_NO : index + 1
                        }.png`}
                        alt="Mechanical Engineering Concept"
                        className="w-full min-h-80 max-h-80 overflow-hidden object-cover"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title sm:text-lg md:text-2xl text-bold text-black bg-white/30 p-2 rounded-xl">
                        {exp.EXP}
                      </h2>
                      <p className="sm:text-sm md:text-md">{exp.DESCRIPTION}</p>
                      <div className="card-actions justify-end">
                        <Link
                          href={`/categories/${params.id}/${
                            params.id !== "mechanical" ? exp.EXP_NO : index + 1
                          }`}
                        >
                          <button className="btn btn-primary">Learn</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default VideosPage;
