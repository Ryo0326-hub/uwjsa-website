import { upcoming } from "../data/events";
import { format } from "date-fns";

export default function UpcomingEvents() {
  const sorted = [...upcoming].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <section className="w-full py-8">
      <h2 className="mb-4 text-center text-2xl font-semibold">
        Upcoming Events
      </h2>

      {/* 👇 NEW wrapper: centers on desktop, adds 16 px side-padding on phones */}
      <div className="mx-auto max-w-lg px-4 sm:px-0 space-y-2">
        {sorted.map((ev) => (
          <details
            key={ev.id}
            className="rounded border border-gray-300 open:shadow"
          >
            <summary className="cursor-pointer py-2 px-3 font-medium">
              {ev.title} — {format(ev.date, "PPP")}
            </summary>

            {ev.description && (
              <div className="px-4 pb-3 text-sm text-gray-700">
                {ev.description}
              </div>
            )}
          </details>
        ))}
      </div>
    </section>
  );
}

