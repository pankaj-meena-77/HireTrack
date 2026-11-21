import { useState } from "react";
import { Link } from "react-router";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student", // "student" or "recruiter" (Admin cannot be self-assigned)
    acceptTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (error) setError("");
  };

  const handleRoleSelect = (selectedRole) => {
    setFormData((prev) => ({
      ...prev,
      role: selectedRole,
    }));
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Client-side validation
    if (!formData.fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!formData.acceptTerms) {
      setError("Please accept the Terms & Conditions and Privacy Policy.");
      return;
    }

    // Simulated registration (will connect to Express + MongoDB in Phase 4)
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(
        `UI Test Successful! Ready to register ${formData.fullName} as a ${formData.role} on the backend.`
      );
    }, 800);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12 bg-slate-50">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        {/* Header */}
        <div className="text-center mb-7">
          <Link to="/" className="text-2xl font-bold text-slate-900 tracking-tight">
            Hire<span className="text-indigo-600">Track</span>
          </Link>
          <h1 className="mt-4 text-2xl font-bold text-slate-900">
            Create your free account
          </h1>
          <p className="mt-1.5 text-sm text-slate-600">
            100% free forever for students, job seekers, and recruiters
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-5 p-3.5 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {/* Role Selection Cards */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              I am joining HireTrack as a:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleRoleSelect("student")}
                className={`p-3.5 rounded-xl border text-left transition cursor-pointer ${
                  formData.role === "student"
                    ? "border-indigo-600 bg-indigo-50/70 ring-1 ring-indigo-600"
                    : "border-slate-200 hover:border-slate-300 bg-white"
                }`}
              >
                <div className="font-semibold text-sm text-slate-900">
                  Student / Job Seeker
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Find internships, jobs &amp; track applications
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleRoleSelect("recruiter")}
                className={`p-3.5 rounded-xl border text-left transition cursor-pointer ${
                  formData.role === "recruiter"
                    ? "border-indigo-600 bg-indigo-50/70 ring-1 ring-indigo-600"
                    : "border-slate-200 hover:border-slate-300 bg-white"
                }`}
              >
                <div className="font-semibold text-sm text-slate-900">
                  Recruiter / Employer
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Post opportunities &amp; review applicants
                </div>
              </button>
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-slate-700 mb-1.5"
            >
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 mb-1.5"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700 mb-1.5"
            >
              Password (min. 8 characters)
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a strong password"
                className="w-full px-4 py-2.5 pr-16 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-0 px-3.5 text-xs font-medium text-slate-500 hover:text-indigo-600 transition"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-slate-700 mb-1.5"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                autoComplete="new-password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
                className="w-full px-4 py-2.5 pr-16 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute inset-y-0 right-0 px-3.5 text-xs font-medium text-slate-500 hover:text-indigo-600 transition"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Terms Acceptance */}
          <div className="flex items-start gap-2.5">
            <input
              id="acceptTerms"
              name="acceptTerms"
              type="checkbox"
              checked={formData.acceptTerms}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"
            />
            <label htmlFor="acceptTerms" className="text-xs text-slate-600 leading-relaxed">
              I agree to HireTrack&apos;s{" "}
              <Link to="/terms" className="text-indigo-600 hover:underline font-medium">
                Terms &amp; Conditions
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-indigo-600 hover:underline font-medium">
                Privacy Policy
              </Link>
              .
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-400 text-white font-medium transition cursor-pointer disabled:cursor-not-allowed"
          >
            {loading ? "Creating account..." : "Create Free Account"}
          </button>
        </form>

        {/* Footer Link */}
        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;