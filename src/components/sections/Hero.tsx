export function Hero() {
  return (
    <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-black md:min-h-[700px]">
      {/* YouTube Video Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/ZXw6Gf8iwFA?autoplay=1&mute=1&loop=1&playlist=ZXw6Gf8iwFA&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          title="Background video"
          allow="autoplay; encrypted-media"
          className="absolute left-1/2 top-1/2 aspect-video h-auto w-[300%] max-w-none -translate-x-1/2 -translate-y-1/2 md:w-[180%]"
          style={{ border: 'none' }}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[900px] px-4 py-24 text-center">
        <h1 className="font-heading text-4xl font-semibold leading-[1] tracking-wider text-white md:text-6xl lg:text-[69px]">
        Winston's redefines
          <br />
          <em className="italic">the future of Peptides.</em>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-xl text-white drop-shadow-lg md:text-2xl">
          Advancing access to quality, affordable compounded care for your health and wellness.
        </p>
      </div>
    </section>
  );
}
