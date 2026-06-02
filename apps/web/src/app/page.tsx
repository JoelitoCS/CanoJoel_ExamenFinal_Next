import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center p-100">
      <h1 className="text-4xl font-bold">
        Examen Final - DAW2 - Joel Cano
      </h1>
      <a className="text-blue-300 border border-blue-200 rounded-[20px] p-3 mt-9" href="/events">
        Ver eventos
      </a>
    </div>
  );
}
