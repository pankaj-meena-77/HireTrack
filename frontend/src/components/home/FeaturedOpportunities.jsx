
const opportunities = [
  {
    id: 1,
    title: 'Frontend Developer Intern',
    company: 'TechNova Solutions',
    location: 'Remote',
    type: 'Internship',
    salary: '₹10,000/month',
    duration: '3 months',
    skills: ['React', 'JavaScript', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'Java Developer',
    company: 'CodeCraft Technologies',
    location: 'Hybrid',
    type: 'Full-time',
    salary: '₹4–6 LPA',
    duration: 'Entry-level',
    skills: ['Java', 'Spring Boot', 'MySQL'],
  },
  {
    id: 3,
    title: 'Python Developer Intern',
    company: 'DataSphere Labs',
    location: 'On-site',
    type: 'Internship',
    salary: '₹8,000/month',
    duration: '6 months',
    skills: ['Python', 'Django', 'MongoDB'],
  },
]

function FeaturedOpportunities() {
  return (
    <section className="bg-violet-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Featured Opportunities
          </h2>

          <p className="mt-4 text-slate-600">
            Discover exciting opportunities to grow your career.
          </p>
        </div>

        {/* Opportunity Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {opportunities.map((job) => (
            <div
              key={job.id}
              className="rounded-2xl border border-indigo-200 bg-indigo-100 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:bg-indigo-200 hover:shadow-lg"
            >

              {/* Job Title and Type */}
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold text-indigo-950">
                  {job.title}
                </h3>

                <span className="shrink-0 rounded-full bg-indigo-200 px-3 py-1 text-xs font-semibold text-indigo-800">
                  {job.type}
                </span>
              </div>

              {/* Company */}
              <p className="mt-3 text-sm font-medium text-indigo-800">
                {job.company}
              </p>

              {/* Location */}
              <p className="mt-2 text-sm text-indigo-700">
                📍 {job.location}
              </p>

              {/* Skills */}
              <div className="mt-5 flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-indigo-200 px-3 py-1.5 text-xs font-medium text-indigo-900"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Salary and Duration */}
              <div className="mt-6 border-t border-indigo-200 pt-5">
                <p className="font-bold text-indigo-950">
                  {job.salary}
                </p>

                <p className="mt-1 text-xs text-indigo-700">
                  Duration: {job.duration}
                </p>

                {/* Apply Button */}
                <button
                  className="mt-5 w-full rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700"
                >
                  Apply Now
                </button>
              </div>

            </div>
          ))}

        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button className="rounded-xl border border-indigo-300 px-8 py-3 font-semibold text-indigo-700 transition hover:bg-indigo-100">
            View All Opportunities →
          </button>
        </div>

      </div>
    </section>
  )
}

export default FeaturedOpportunities
