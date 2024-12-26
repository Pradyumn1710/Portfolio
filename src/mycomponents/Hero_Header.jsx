import "tailwindcss/tailwind.css";
import { TypeAnimation } from "react-type-animation";

export default function Hero_Header() {
  return (
    <div className="flex justify-between items-center bg-black">
      <Lhs/>
      <Rhs />
    </div>
  );
}

function Lhs() {
  return (
    <div className="ml-16">
      <div id="Heading" className="text-6xl text-white font-bold mb-4">
        Hi, I am <span className="text-amber-400">Pradyumn </span>
      </div>
      <div id="Sub-Heading" className="text-3xl text-white">
        <TypeAnimation
          sequence={[
            "A Passionate Developer",
            1000,
            "A Creative Designer",
            1000,
            "Turning Ideas into Reality",
            1000,
            "Building Dreams, One Line of Code at a Time",
          ]}
          wrapper="div"
          speed={50}
          className="whitespace-nowrap" // Ensures text doesn't wrap
          repeat={Infinity}
        />
      </div>
    </div>
  );
}

function Rhs() {
  return (
    <div className="flex justify-center items-center w-1/2">
      <img
        src="main_.png"
        alt="my photo"
        className="border border-secondary transform scale-115"
      />
    </div>
  );
}
