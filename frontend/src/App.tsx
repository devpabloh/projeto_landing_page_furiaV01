import { BrowserRouter, Routes, Route } from 'react-router-dom'


/* CSS */
import './App.css'
import { ThemeProvider } from './context/ThemeContext'

/* pages - páginas */
import Home from './pages/Home/Home'
import Carrer from './pages/Carrer/Carrer'

/* Componentes */
import Header from './components/Header/Header'
import Carousel from './components/Carousel/Carousel'
import Footer from './components/Footer/Footer'
import Esports from './pages/Esports/Esports'
import ChatBotIcon from './components/ChatBotIcon/ChatBotIcon'

/* imagem */
import chatbotImage from './assets/IconChatBot/chatbotFuria.png'



function App() {
  
  const images = [
    { src: '/src/assets/carousel/shopFuria.webp', alt: 'shop da Furia' },
    { src: '/src/assets/carousel/furiaTimeCS.jpg', alt: 'Time de cs da Fúria'},
    { src: '/src/assets/carousel/furiaCS.png', alt: 'cs Fúria' },
  ];
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header/>
        <Carousel images={images}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/carrer' element={<Carrer/>}/>
          <Route path='/esport' element={<Esports/>}/>
        </Routes>
        <ChatBotIcon imageSrc={chatbotImage} />
        <Footer/>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
