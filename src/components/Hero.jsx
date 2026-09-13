import bannerImage from '../assets/banner-stack.png'

function Hero() {
  return (
    <section className="grid grid-cols-12 items-center gap-8 pt-24">
      <div className="col-span-7 pr-8">
        <h1 className="font-inter text-6xl font-extrabold tracking-tight text-slate-900">
          Build Your Ideal
          <br />
          <span className="text-brand-gradient">Development Stack</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
          Explore frontend, backend, database, and tooling options,
          <br />
          compare them side by side, and put together the stack that fits your next project.
        </p>

        <div className="mt-13 flex items-center gap-3">
          <button
            type="button"
            className="btn bg-brand-gradient h-10 w-42 rounded-lg border-0 px-0 font-inter text-sm font-semibold text-white shadow-xs hover:opacity-90"
          >
            Explore Technologies
          </button>
          <button
            type="button"
            className="btn h-[42px] w-[170px] rounded-lg border border-gray-200 bg-white px-0 font-inter text-sm font-normal text-gray-700 shadow-none hover:bg-gray-50"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="col-span-5 flex h-[420px] items-center justify-center">
        <img src={bannerImage} alt="Layered development stack illustration" className="max-w-none shrink-0" />
      </div>
    </section>
  )
}

export default Hero
