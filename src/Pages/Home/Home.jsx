// Librarys
import { Link } from 'react-router-dom'

// Styles
import './Home.css'

// Components 
import TextEditor from '../../Component/TextEditor/TextEditor'

// *******************************************

const Home = () => {

  return (
    <>
      <TextEditor />
      <Link to={'/preview'} className='preview-button'>preview</Link>
    </>
  )
}

export default Home