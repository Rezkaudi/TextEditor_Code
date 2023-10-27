// Librarys
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'

// Styles 
import './App.css';

// Components 
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer';
import Container from './Component/Container/Container';
import Preview from './Pages/Preview/Preview';
import Home from './Pages/Home/Home';

//Context
import PreviewContext from './Context/PreviewContext'


//*********************************************************/

const App = () => {

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
