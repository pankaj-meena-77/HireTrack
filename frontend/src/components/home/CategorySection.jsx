
const categories = [
  {
    title: 'Internships',
    description: 'Gain experience and kickstart your career.',
    icon: '💼',
  },
  {
    title: 'Full-time Jobs',
    description: 'Find the right role to grow professionally.',
    icon: '🚀',
  },
  {
    title: 'Part-time',
    description: 'Balance work with your studies.',
    icon: '⏰',
  },
  {
    title: 'Freelance',
    description: 'Work independently on exciting projects.',
    icon: '💻',
  },
]

function CategorySection() {
  return (
    <section className="bg-blue-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Explore Opportunities
          </h2>
          <p className="mt-4 text-slate-600">
            Choose the opportunity that matches your career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.title}
              
className="rounded-2xl border border-emerald-200 bg-emerald-100 p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-emerald-400 hover:bg-emerald-200 hover:shadow-xl"

            >
              <div className="mb-5 text-4xl">
                {category.icon}
              </div>

              <h3 className="text-xl font-bold text-emerald-950">
                {category.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-emerald-800">
                {category.description}
              </p>

              <button className="mt-6 font-semibold text-emerald-700 hover:text-emerald-900">
                Explore →
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default CategorySection
