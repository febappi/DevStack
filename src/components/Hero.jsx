import bannerImage from '../assets/banner-stack.png'

function Hero() {
  return (
    <section className="grid grid-cols-1 items-center pt-12 md:pt-16 lg:grid-cols-12 lg:gap-8 lg:pt-24">
      <div className="text-center lg:col-span-7 lg:pr-8 lg:text-left">
        <h1 className="font-inter text-3xl leading-tight font-bold tracking-tight text-slate-900 md:text-5xl lg:leading-none lg:font-extrabold xl:text-6xl">
          Build Your Ideal
          <br />
          <span className="text-brand-gradient">Development Stack</span>
        </h1>

        <p className="mx-auto mt-3 max-w-xl font-inter text-sm leading-relaxed text-slate-600 md:mt-5 md:font-sans md:text-lg lg:mx-0 lg:mt-6">
          Explore frontend, backend, database, and tooling options,{' '}
          <br className="hidden lg:inline" />
          compare them side by side, and put together the stack that fits your next project.
        </p>

        <div className="mt-6 flex items-center gap-3 md:mt-8 md:justify-center lg:mt-13 lg:justify-start">
          <button
            type="button"
            className="btn bg-brand-gradient h-10 flex-1 rounded-lg border-0 px-0 font-inter text-xs font-normal text-white shadow-xs hover:opacity-90 md:w-42 md:flex-none md:text-sm md:font-semibold"
          >
            Explore Technologies
          </button>
          <button
            type="button"
            className="btn h-[42px] flex-1 rounded-lg border border-gray-200 bg-white px-0 font-inter text-xs font-normal text-gray-700 shadow-none hover:bg-gray-50 md:w-[170px] md:flex-none md:text-sm"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="-mx-4 mt-6 flex h-[300px] items-center justify-center overflow-hidden md:mt-4 md:h-[360px] lg:col-span-5 lg:mx-0 lg:mt-0 lg:h-[420px] lg:overflow-visible">
        <img
          src={bannerImage}
          alt="Layered development stack illustration"
          className="w-[492px] max-w-none shrink-0 md:w-[560px] lg:w-full xl:w-auto"
        />
      </div>
    </section>
  )
}

export default Hero
