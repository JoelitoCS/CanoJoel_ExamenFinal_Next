import EventCard from "../components/EventCard";

const esdeveniments = [
  {
    id: "ev1",
    nom: "Hackathon Fullstack",
    data: "2026-06-20",
    ciutat: "Barcelona",
  },
  {
    id: "ev2",
    nom: "Mobile World Congress",
    data: "2026-04-20",
    ciutat: "Valencia",
  },
  {
    id: "ev3",
    nom: "Hacking Extremis",
    data: "2026-06-23",
    ciutat: "Madrid",
  },
  {
    id: "ev4",
    nom: "Programa con Joel",
    data: "2026-07-01",
    ciutat: "Valencia",
  },
];

export default function Events() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-4xl font-bold">Esdeveniments</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {esdeveniments.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </main>
  );
}