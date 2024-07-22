import "tailwindcss/tailwind.css";
import Spline from "@splinetool/react-spline";
export default function Hero_Header() {
  return (
    <div className="flex justify-evenly w-screen h-screen">
      <div className="bg-black h-screen w-screen flex items-center">
        <div className="ml-20">
          <div className="text-white text-4xl">
            Hii I am <span className="text-amber-400 text-5xl">Pradyumn</span>
          </div>
          <div className="text-white text-2xl mt-2">
            I am a web developer and a designer
          </div>
        </div>
      </div>

      <div className="h-screen w-screen flex items-center justify-center bg-black"> {/* Modified align-item to items-center and added justify-center */}
        <Spline className="h-full w-full" scene="https://prod.spline.design/fYU6bU7ZlbtJVBaU/scene.splinecode" />
      </div>
    </div>
  );
}