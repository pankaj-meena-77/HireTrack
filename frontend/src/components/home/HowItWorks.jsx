
const steps = [
  {
    number: '01',
    icon: '👤',
    title: 'Create Your Profile',
    description:
      'Sign up, add your skills, education and experience, and build your professional profile.',
    color: 'bg-blue-100',
    iconColor: 'text-blue-700',
  },
  {
    number: '02',
    icon: '🔎',
    title: 'Discover Opportunities',
    description:
      'Explore internships, jobs and freelance projects that match your skills and preferences.',
    color: 'bg-emerald-100',
    iconColor: 'text-emerald-700',
  },
  {
    number: '03',
    icon: '🚀',
    title: 'Apply and Track',
    description:
      'Apply for opportunities and track your application progress from one dashboard.',
    color: 'bg-indigo-100',
    iconColor: 'text-indigo-700',
  },
]

function HowItWorks() {
  return (
    <section className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Simple Process
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
            How HireTrack Works
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Your journey towards better career opportunities starts
            with three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="mb-6 flex items-center justify-between">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${step.color} text-3xl`}
                >
                  {step.icon}
                </div>

                <span className="text-3xl font-extrabold text-slate-200">
                  {step.number}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default HowItWorks
