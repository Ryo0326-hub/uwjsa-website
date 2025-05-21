import { past } from "../data/events";

// src/components/PastEvents.jsx
// src/components/PastEvents.jsx
export default function PastEvents() {
  return (
    <section className="w-full py-8">
      <h2 className="mb-4 text-center text-2xl font-semibold">Past Events</h2>

      {/* OUTER scrolling frame */}
      <div className="w-full overflow-x-auto lg:overflow-visible">
        {/* The 3-card desktop viewport = 3×16rem cards + 2×1.5rem gaps  */}
        <div className="mx-auto md:max-w-[54rem] px-4">
          {/* INNER strip: left-aligned on phone, centered ≥768 px */}
          <div className="flex gap-6 justify-start md:justify-center">
            {past.map((p) => (
              <figure
                key={p.id}
                className="shrink-0 w-64 text-center snap-center"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-64 w-64 object-cover rounded shadow-md"
                />
                <figcaption className="mt-2 text-sm">{p.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}




