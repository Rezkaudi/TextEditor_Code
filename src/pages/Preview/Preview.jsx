import './Preview.css'
import 'react-quill/dist/quill.snow.css';


import { useContext } from 'react';
import PreviewContext from '../../Context/PreviewContext';

const Preview = () => {

    const { preview } = useContext(PreviewContext)

    return (
        <div className='preview' dangerouslySetInnerHTML={{ __html: preview }}></div>
    )
}

export default Preview