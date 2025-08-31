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
import shopFuria from './assets/carousel/shopFuria.webp'
import furiaTimeCS from './assets/carousel/furiaTimeCS.jpg'
import furiaCS from './assets/carousel/furiaCS.png'



function App() {
  
  const images = [
    { src: shopFuria, alt: 'shop da Furia' },
    { src: furiaTimeCS, alt: 'Time de cs da Fúria'},
    { src: furiaCS, alt: 'cs Fúria' },
  ];

  // Debug: verificar se as imagens estão sendo importadas
  console.log('App images:', images);
  console.log('shopFuria:', shopFuria);
  console.log('furiaTimeCS:', furiaTimeCS);
  console.log('furiaCS:', furiaCS);
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
