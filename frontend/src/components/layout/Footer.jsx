import { Link } from "react-router";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Responsive Grid: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <Link to="/" className="text-2xl font-bold text-white tracking-tight">
              Hire<span className="text-indigo-400">Track</span>
            </Link>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              One Platform. Every Opportunity. One Application Tracker. Built for
              students, freshers, and job seekers.
            </p>
            <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-950 text-emerald-400 border border-emerald-800">
              100% Free Forever • V1
            </div>
          </div>

          {/* Opportunities Column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Opportunities
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/opportunities?type=internship" className="hover:text-indigo-400 transition-colors">
                  Internships
                </Link>
              </li>
              <li>
                <Link to="/opportunities?type=full-time" className="hover:text-indigo-400 transition-colors">
                  Full-Time Jobs
                </Link>
              </li>
              <li>
                <Link to="/opportunities?type=part-time" className="hover:text-indigo-400 transition-colors">
                  Part-Time Jobs
                </Link>
              </li>
              <li>
                <Link to="/opportunities?type=freelance" className="hover:text-indigo-400 transition-colors">
                  Freelance Roles
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support Column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Platform
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-indigo-400 transition-colors">
                  About HireTrack
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-indigo-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-indigo-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-indigo-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Account Column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Get Started
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/register" className="hover:text-indigo-400 transition-colors">
                  Create Free Account
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-indigo-400 transition-colors">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/opportunities" className="hover:text-indigo-400 transition-colors">
                  Explore All Opportunities
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {currentYear} HireTrack. Discover Opportunities. Build Your Future.</p>
          <p className="text-slate-500">Made for students & freshers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;