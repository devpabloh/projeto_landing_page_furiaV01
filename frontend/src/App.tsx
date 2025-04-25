import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* CSS */
import './App.css'

/* pages - páginas */
import Home from './pages/Home/Home'

/* Componentes */
import Header from './components/Header/Header'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  

  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
