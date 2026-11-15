
import { Routes, Route } from 'react-router'

function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <h1 className="text-4xl font-bold text-blue-600">
        Welcome to HireTrack
      </h1>
    </div>
  )
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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
