import { Routes, Route } from 'react-router'
import Navbar from './components/layout/Navbar'
import HeroSection from './components/home/HeroSection'
import CategorySection from './components/home/CategorySection'
import FeaturedOpportunities from './components/home/FeaturedOpportunities'
import HowItWorks from './components/home/HowItWorks'
import Footer from './components/layout/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import Opportunities from './pages/Opportunities'
import OpportunityDetails from './pages/OpportunityDetails'

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


function Students() {
  return <h1 className="p-10 text-3xl font-bold">For Students</h1>
}

function Recruiters() {
  return <h1 className="p-10 text-3xl font-bold">For Recruiters</h1>
}

function About() {
  return <h1 className="p-10 text-3xl font-bold">About HireTrack</h1>
}

function Contact() {
  return <h1 className="p-10 text-3xl font-bold">Contact Us</h1>
}

function Privacy() {
  return <h1 className="p-10 text-3xl font-bold">Privacy Policy</h1>
}

function Terms() {
  return <h1 className="p-10 text-3xl font-bold">Terms & Conditions</h1>
}



function NotFound() {
  return <h1 className="p-10 text-3xl font-bold">404 - Page Not Found</h1>
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/students" element={<Students />} />
          <Route path="/recruiters" element={<Recruiters />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/opportunities/:id" element={<OpportunityDetails />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
