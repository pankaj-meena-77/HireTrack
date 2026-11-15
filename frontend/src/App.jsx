
import { Routes, Route } from 'react-router'
import Navbar from './components/layout/Navbar'

function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-slate-900">
          Welcome to <span className="text-blue-600">HireTrack</span>
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          Discover opportunities. Build your future.
        </p>
      </div>
    </main>
  )
}

function Opportunities() {
  return <h1 className="p-10 text-3xl font-bold">Explore Opportunities</h1>
}

function Students() {
  return <h1 className="p-10 text-3xl font-bold">For Students</h1>
}

function Recruiters() {
  return <h1 className="p-10 text-3xl font-bold">For Recruiters</h1>
}

function About() {
  return <h1 className="p-10 text-3xl font-bold">About HireTrack</h1>
}

function Login() {
  return <h1 className="p-10 text-3xl font-bold">Login Page</h1>
}

function Register() {
  return <h1 className="p-10 text-3xl font-bold">Register Page</h1>
}

function NotFound() {
  return <h1 className="p-10 text-3xl font-bold">404 - Page Not Found</h1>
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/students" element={<Students />} />
        <Route path="/recruiters" element={<Recruiters />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
