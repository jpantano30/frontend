import './App.css'
// Import components
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from "react-router-dom"
// import pages 
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

function App() {
  const URL = 'https://full-stack-portfolio-hw20-4c36ad0a6a9a.herokuapp.com/' || "http://localhost:4000/"
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects URL={URL} />} />
        <Route path='/about' element={<About URL={URL} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
