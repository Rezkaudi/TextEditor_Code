
// Librarys
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// Styles 
import './Preview.css'

//Context
import PreviewContext from '../../Context/PreviewContext';


// ************************************************

const Preview = () => {

    const { preview } = useContext(PreviewContext)


    return (
        <>
            <div className='preview' dangerouslySetInnerHTML={{ __html: preview }}></div>
            <Link to={'/'} className='preview-button'>back</Link>
        </>
    )
}

export default Preview