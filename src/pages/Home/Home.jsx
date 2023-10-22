
import { Link } from 'react-router-dom'
import TextEditor from '../../component/TextEditor/TextEditor'
import './Home.css'


const Home = () => {

  return (
    <>
      <TextEditor />
      <Link to={'/preview'} className='preview-button'>preview</Link>
    </>
  )
}

export default Home