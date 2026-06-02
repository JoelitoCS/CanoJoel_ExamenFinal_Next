type Event = {
  id: string;
  nom: string;
  data: string;
  ciutat: string;
};

type EventCardProps = {
  event: Event;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-slate-300 hover:shadow-lg">
      <p className="text-xs uppercase tracking-[0.25em] text-slate-500">ID: {event.id}</p>
      <h2 className="mt-4 text-2xl font-semibold text-slate-900">{event.nom}</h2>
      <div className="mt-4 space-y-3 text-sm text-slate-700">
        <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
          <p className="font-medium text-slate-600">Data</p>
          <span>{event.data}</span>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
          <p className="font-medium text-slate-600">Ciutat</p>
          <span>{event.ciutat}</span>
        </div>
      </div>
    </article>
  );
}