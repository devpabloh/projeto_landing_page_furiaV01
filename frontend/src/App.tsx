import { BrowserRouter, Routes, Route } from 'react-router-dom'


/* CSS */
import './App.css'
import { ThemeProvider } from './context/ThemeContext'

/* pages - páginas */
import Home from './pages/Home/Home'

/* Componentes */
import Header from './components/Header/Header'
import Carousel from './components/Carousel/Carousel'
import Footer from './components/Footer/Footer'



function App() {
  
  const images = [
    { src: '/src/assets/carousel/shopFuria.webp', alt: 'Descrição da imagem 1' },
    { src: '/src/assets/carousel/furiaTimeCS.jpg', alt: 'Descrição da imagem 2'},
    { src: '/src/assets/carousel/furiaCS.png', alt: 'Descrição da imagem 3' },
    // Adicione mais imagens conforme necessário
  ];
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header/>
        <Carousel images={images}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
