import { useState } from "react";
import { Link } from "react-router";

const DEMO_OPPORTUNITIES = [
  {
    id: "1",
    title: "Frontend Developer Intern",
    company: "TechNova Labs",
    location: "Remote",
    workMode: "Remote",
    type: "Internship",
    category: "Web Development",
    stipend: "₹15,000 / month",
    duration: "3 Months",
    skills: ["React", "Tailwind CSS", "JavaScript"],
    postedAt: "2 days ago",
  },
  {
    id: "2",
    title: "Junior Backend Engineer",
    company: "CloudScale Systems",
    location: "Bengaluru, India",
    workMode: "Hybrid",
    type: "Full-Time",
    category: "Backend Development",
    stipend: "₹6.5 LPA",
    duration: "Full-Time",
    skills: ["Node.js", "Express", "MongoDB"],
    postedAt: "1 day ago",
  },
  {
    id: "3",
    title: "UI/UX Design Intern",
    company: "PixelCraft Studio",
    location: "Remote",
    workMode: "Remote",
    type: "Internship",
    category: "Design",
    stipend: "₹12,000 / month",
    duration: "2 Months",
    skills: ["Figma", "Wireframing", "Prototyping"],
    postedAt: "3 days ago",
  },
  {
    id: "4",
    title: "Software Development Engineer (Fresher)",
    company: "FinEdge Solutions",
    location: "Pune, India",
    workMode: "On-site",
    type: "Full-Time",
    category: "Software Engineering",
    stipend: "₹7.2 LPA",
    duration: "Full-Time",
    skills: ["Java", "DSA", "SQL"],
    postedAt: "Today",
  },
  {
    id: "5",
    title: "Data Analyst Intern",
    company: "InsightMetrics",
    location: "Hyderabad, India",
    workMode: "Hybrid",
    type: "Internship",
    category: "Data & Analytics",
    stipend: "₹18,000 / month",
    duration: "6 Months",
    skills: ["Python", "SQL", "Excel"],
    postedAt: "4 days ago",
  },
  {
    id: "6",
    title: "React Native Mobile Developer",
    company: "AppPulse",
    location: "Remote",
    workMode: "Remote",
    type: "Freelance",
    category: "Mobile Development",
    stipend: "₹25,000 / project",
    duration: "1 Month",
    skills: ["React Native", "REST APIs", "Git"],
    postedAt: "5 days ago",
  },
];

const Opportunities = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedMode, setSelectedMode] = useState("All");

  const filteredOpportunities = DEMO_OPPORTUNITIES.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesType =
      selectedType === "All" || job.type === selectedType;

    const matchesMode =
      selectedMode === "All" || job.workMode === selectedMode;

    return matchesSearch && matchesType && matchesMode;
  });

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedType("All");
    setSelectedMode("All");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 mb-3">
            100% Free Direct Applications • Demo Listings
          </div>
          <h1 className="text-3xl font-bold text-slate-900">
            Explore Opportunities
          </h1>
          <p className="mt-1.5 text-slate-600">
            Search internships, fresher roles, and remote jobs tailored to your skills
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-slate-200 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Search Input */}
            <div className="md:col-span-6">
              <label htmlFor="search" className="sr-only">
                Search roles, companies, or skills
              </label>
              <input
                id="search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by role, company, or skill (e.g., React, Java, Remote)..."
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
            </div>

            {/* Opportunity Type Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                <option value="All">All Types</option>
                <option value="Internship">Internship</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Freelance">Freelance</option>
              </select>
            </div>

            {/* Work Mode Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedMode}
                onChange={(e) => setSelectedMode(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                <option value="All">All Work Modes</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="On-site">On-site</option>
              </select>
            </div>
          </div>

          {/* Active Results Count & Reset */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-sm">
            <span className="text-slate-600">
              Showing{" "}
              <span className="font-semibold text-slate-900">
                {filteredOpportunities.length}
              </span>{" "}
              {filteredOpportunities.length === 1 ? "opportunity" : "opportunities"}
            </span>

            {(searchQuery || selectedType !== "All" || selectedMode !== "All") && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-indigo-600 hover:text-indigo-700 font-medium cursor-pointer"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* Opportunities Grid */}
        {filteredOpportunities.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
            <h3 className="text-lg font-semibold text-slate-900">
              No matching opportunities found
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Try clearing your filters or searching with a broader keyword.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="mt-4 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition cursor-pointer"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOpportunities.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-indigo-50 text-indigo-700">
                      {job.type}
                    </span>
                    <span className="text-xs text-slate-500">{job.postedAt}</span>
                  </div>

                  {/* Title & Company */}
                  <h2 className="text-lg font-bold text-slate-900 leading-snug">
                    {job.title}
                  </h2>
                  <p className="text-sm font-medium text-slate-600 mt-1">
                    {job.company} • {job.location}
                  </p>

                  {/* Stipend & Mode */}
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-700">
                    <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 font-medium">
                      {job.stipend}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                      {job.workMode}
                    </span>
                  </div>

                  {/* Skills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    to={`/opportunities/${job.id}`}
                    className="block w-full text-center py-2.5 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Opportunities;