import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Lista from './pages/Lista'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lugares" element={<Lista />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
