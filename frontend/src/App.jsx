
import { Routes, Route } from 'react-router'
import Navbar from './components/layout/Navbar'
import HeroSection from './components/home/HeroSection'
import CategorySection from './components/home/CategorySection'
import FeaturedOpportunities from './components/home/FeaturedOpportunities'
import HowItWorks from './components/home/HowItWorks'

function Home() {
  return (
    <main>
      <HeroSection />
        <CategorySection />
         <FeaturedOpportunities />
          <HowItWorks />
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
