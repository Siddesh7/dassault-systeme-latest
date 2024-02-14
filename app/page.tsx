import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Contact from "./components/Contact";
export default function Home() {
  return (
    <main className="bg-[#131213]">
      <Hero />
      <Categories />
      <div className="w-[80vw] m-auto flex flex-col items-center gap-8 justify-center py-[150px]">
        <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-orange-500 to-pink-400 text-transparent bg-clip-text bg-300% animate-gradient">
          Start with this video
        </h1>
        <iframe
          className=" w-[90vw] h-[40vh] md:w-[70vw] md:h-[70vh]"
          src="https://www.youtube-nocookie.com/embed/lAxXWYAIt4k?si=J6o10G-GbkNQY0Gi"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <Contact />
    </main>
  );
}
