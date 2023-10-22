import 'react-quill/dist/quill.snow.css';
import './TextEditor.css'

import ReactQuill, { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';

import { useContext } from 'react';
import PreviewContext from '../../Context/PreviewContext';

Quill.register('modules/imageResize', ImageResize);



const TextEditor = () => {

    const modules = {
        toolbar: [
            // options here
            [{ font: [] }, { header: [1, 2, 3, 4, 5, 6, false] }, { color: [] }, { background: [] }],
            ["bold", "italic", "underline", "strike"],
            [{ script: "sub" }, { script: "super" }, "blockquote", "code-block"],
            [{ list: "ordered" }, { list: "bullet" }, { direction: "rtl" }],
            [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
            ["link", "image", "video"],
        ],
        imageResize: {
            parchment: Quill.import('parchment'),
            modules: ['Resize', 'DisplaySize']
        },
    }

    const { preview, setPreview } = useContext(PreviewContext)





    return (
        <>
            <ReactQuill style={{ width: "100vw", minHeight: "50vh" }} modules={modules} theme="snow" value={preview} onChange={setPreview} />
            <button onClick={() => { console.log(preview) }}>bcxcv</button>
        </>
    )
}

export default TextEditor

