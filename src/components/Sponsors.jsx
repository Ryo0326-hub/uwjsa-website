import wusa from "../assets/wusalogo.png";  // ← place WUSA logo in src/assets

export default function Sponsors() {
  return (
    <section className="w-full py-6">              {/* was py-12 */}
      <div className="mx-auto max-w-4xl text-center px-4">
        <h2 className="mb-4 text-2xl font-semibold">Our Sponsors</h2> {/* was mb-8 */}
        <img
          src={wusa}
          alt="WUSA"
          className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto mx-auto object-contain"
        />
      </div>
    </section>
  );
}


