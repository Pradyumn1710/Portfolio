import "tailwindcss/tailwind.css";
import Spline from "@splinetool/react-spline";
export default function Hero_Header() {
  return (
    <div className="flex bg-slate-900 justify-evenlyw-screen h-screen">
    <div className="bg-black w-screen h-96px flex items-center">
  <div className="ml-20">
    <div className="text-white text-4xl">
      Hii I am <span className="text-amber-400 text-5xl">Pradyumn</span>
    </div>
    <div className="text-white text-2xl mt-2">
      I am a web developer and a designer
    </div>
  </div>
</div>

      <div className="bg-blue-700 h-screen w-screen">
      <Spline className="h-full w-full" scene="https://prod.spline.design/fYU6bU7ZlbtJVBaU/scene.splinecode" />


      </div>
    </div> 
     );
}