import { useState } from "react";
import { Link, useParams } from "react-router";

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
    deadline: "30 Nov 2026",
    postedAt: "2 days ago",
    skills: ["React", "Tailwind CSS", "JavaScript", "Git"],
    description:
      "Join TechNova Labs as a Frontend Developer Intern to build responsive, accessible web interfaces for modern SaaS products. You will collaborate directly with senior engineers and product designers.",
    responsibilities: [
      "Build reusable React components styled with Tailwind CSS.",
      "Integrate REST APIs and manage client-side application state cleanly.",
      "Test and optimize UI layouts across desktop, tablet, and mobile screens.",
      "Participate in daily code reviews and Git workflows.",
    ],
    requirements: [
      "Solid understanding of HTML, CSS, JavaScript (ES6+), and React.",
      "Familiarity with Git and GitHub.",
      "Strong attention to UI detail and willingness to learn.",
    ],
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
    deadline: "05 Dec 2026",
    postedAt: "1 day ago",
    skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
    description:
      "CloudScale Systems is looking for a Junior Backend Engineer to design scalable APIs, manage MongoDB schemas, and power high-reliability cloud services.",
    responsibilities: [
      "Develop and maintain RESTful APIs using Node.js and Express.",
      "Design efficient MongoDB data models and queries.",
      "Implement authentication, validation, and role-based access controls.",
      "Write clean, well-documented, and testable backend code.",
    ],
    requirements: [
      "Hands-on experience with Node.js, Express, and MongoDB.",
      "Understanding of HTTP, JWT authentication, and database indexing.",
      "B.Tech / B.E. / MCA or equivalent practical project experience.",
    ],
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
    deadline: "28 Nov 2026",
    postedAt: "3 days ago",
    skills: ["Figma", "Wireframing", "Prototyping", "Design Systems"],
    description:
      "Help shape intuitive user journeys and clean design systems for early-stage startups at PixelCraft Studio.",
    responsibilities: [
      "Create wireframes, user flows, and interactive Figma prototypes.",
      "Maintain consistent typography, spacing, and color tokens.",
      "Collaborate with frontend developers during design handoff.",
    ],
    requirements: [
      "Proficiency in Figma and component-based UI design.",
      "Portfolio or class projects demonstrating clean visual hierarchy.",
    ],
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
    deadline: "10 Dec 2026",
    postedAt: "Today",
    skills: ["Java", "DSA", "SQL", "OOPs"],
    description:
      "Kickstart your software engineering career at FinEdge Solutions, building secure financial transaction and analytics platforms.",
    responsibilities: [
      "Write clean, maintainable backend and core service modules in Java.",
      "Optimize SQL queries and debug production issues with mentorship.",
      "Collaborate in agile sprints to ship customer-facing features.",
    ],
    requirements: [
      "Strong foundation in Java, OOPs, Data Structures & Algorithms, and SQL.",
      "2026/2027 graduate with strong problem-solving skills.",
    ],
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
    deadline: "02 Dec 2026",
    postedAt: "4 days ago",
    skills: ["Python", "SQL", "Excel", "Data Visualization"],
    description:
      "Turn raw product and customer datasets into actionable insights for business teams at InsightMetrics.",
    responsibilities: [
      "Query and clean structured data using SQL and Python.",
      "Build weekly KPI dashboards and executive summary reports.",
      "Identify user retention trends and funnel drop-offs.",
    ],
    requirements: [
      "Working knowledge of SQL queries, Python (Pandas), and spreadsheets.",
      "Clear written communication skills.",
    ],
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
    deadline: "29 Nov 2026",
    postedAt: "5 days ago",
    skills: ["React Native", "REST APIs", "Git", "JavaScript"],
    description:
      "Build cross-platform Android and iOS screens for AppPulse's student productivity companion app.",
    responsibilities: [
      "Implement smooth mobile navigation and responsive screens in React Native.",
      "Connect mobile views to existing REST endpoints.",
      "Package and test builds on Android devices.",
    ],
    requirements: [
      "Experience building at least one React or React Native mobile app.",
      "Familiarity with REST API integration and Git.",
    ],
  },
];

const OpportunityDetails = () => {
  const { id } = useParams();
  const [applied, setApplied] = useState(false);

  const opportunity = DEMO_OPPORTUNITIES.find((item) => item.id === id);

  if (!opportunity) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center px-4 bg-slate-50">
        <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">
            Opportunity Not Found
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            This listing may have closed or the link is invalid.
          </p>
          <Link
            to="/opportunities"
            className="mt-6 inline-block px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition"
          >
            Back to All Opportunities
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          to="/opportunities"
          className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-indigo-600 mb-6 transition"
        >
          ← Back to Opportunities
        </Link>

        {/* Main Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Header Section */}
          <div className="p-6 sm:p-8 border-b border-slate-200">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700">
                  {opportunity.type}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                  100% Free Application
                </span>
              </div>
              <span className="text-xs text-slate-500">
                Posted {opportunity.postedAt}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {opportunity.title}
            </h1>
            <p className="mt-1.5 text-base font-medium text-slate-600">
              {opportunity.company} • {opportunity.location}
            </p>

            {/* Quick Facts Grid */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div>
                <div className="text-xs text-slate-500">Compensation</div>
                <div className="text-sm font-semibold text-slate-900 mt-0.5">
                  {opportunity.stipend}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Work Mode</div>
                <div className="text-sm font-semibold text-slate-900 mt-0.5">
                  {opportunity.workMode}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Duration</div>
                <div className="text-sm font-semibold text-slate-900 mt-0.5">
                  {opportunity.duration}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Apply By</div>
                <div className="text-sm font-semibold text-slate-900 mt-0.5">
                  {opportunity.deadline}
                </div>
              </div>
            </div>
          </div>

          {/* Body Details */}
          <div className="p-6 sm:p-8 space-y-7">
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">
                About the Role
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {opportunity.description}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-3">
                Key Responsibilities
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-600">
                {opportunity.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-3">
                Requirements
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-600">
                {opportunity.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-3">
                Skills Required
              </h2>
              <div className="flex flex-wrap gap-2">
                {opportunity.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-indigo-50 text-indigo-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Apply Action Bar */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {applied ? (
                <div className="w-full p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="text-sm text-emerald-900">
                    <span className="font-semibold">Application Submitted!</span>{" "}
                    (Demo UI — will save to your Student Application Tracker once backend is connected.)
                  </div>
                  <Link
                    to="/opportunities"
                    className="text-sm font-semibold text-emerald-700 hover:underline shrink-0"
                  >
                    Browse more →
                  </Link>
                </div>
              ) : (
                <>
                  <p className="text-xs text-slate-500">
                    No hidden fees. Direct application tracking included free.
                  </p>
                  <button
                    type="button"
                    onClick={() => setApplied(true)}
                    className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition cursor-pointer shrink-0"
                  >
                    Apply Now
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityDetails;