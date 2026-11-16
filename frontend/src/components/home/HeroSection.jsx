
function HeroSection() {
  return (
    <section className="bg-slate-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl text-center">

        <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          Your Career Journey Starts Here
        </span>

        <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          Discover Opportunities.
          <span className="block text-blue-600">
            Build Your Future.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Find internships, jobs, freelance projects and more.
          Explore opportunities that match your skills and career goals.
        </p>

        <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="Search jobs, internships or skills..."
            className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-5 py-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
            Search Opportunities
          </button>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-slate-500">
          <span>Popular:</span>
          <span>React Developer</span>
          <span>Java Intern</span>
          <span>Python Developer</span>
          <span>UI/UX Designer</span>
        </div>

      </div>
    </section>
  )
}

export default HeroSection
