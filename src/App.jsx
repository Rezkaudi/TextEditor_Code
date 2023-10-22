import './App.css';


import Header from './component/Header/Header'
import Footer from './component/Footer/Footer';
import Container from './component/Container/Container';
import Preview from './pages/Preview/Preview';
import Home from './pages/Home/Home';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import PreviewContext from './Context/PreviewContext'
import { useState } from 'react'




function App() {


  const [preview, setPreview] = useState('')

  const value = { preview, setPreview }

  return (
    <PreviewContext.Provider value={value}>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Preview' element={<Preview />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </PreviewContext.Provider>

  );
}

export default App;
