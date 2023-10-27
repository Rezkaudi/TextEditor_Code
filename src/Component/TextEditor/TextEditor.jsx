// Librarys
import ReactQuill, { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';
import { useContext, useEffect } from 'react';

// Styles
import 'react-quill/dist/quill.snow.css';


import './TextEditor.css'

// Context
import PreviewContext from '../../Context/PreviewContext';


// *********************************************

Quill.register('modules/imageResize', ImageResize);

const TextEditor = () => {

    const { preview, setPreview } = useContext(PreviewContext)

    const modules = {
        toolbar: [
            // options here
            [{ font: [] }, { header: [1, 2, 3, 4, 5, 6, false] }, { color: [] }, { background: [] }],
            ["bold", "italic", "underline", "strike"],
            [{ script: "sub" }, { script: "super" }, "blockquote", "code-block"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
            ["link", "image", { direction: "rtl" }],
        ],
        imageResize: {
            parchment: Quill.import('parchment'),
            modules: ['Resize', 'DisplaySize']
        }
    }


    useEffect(() => {
        let tip1 = document.querySelectorAll("button[type='button']")
        let tip2 = document.querySelectorAll(".ql-picker")
        tip1.forEach(item => {
            let att = item.classList[0].slice(3)
            item.setAttribute("att", att)
        })

        tip2.forEach(item => {
            let att = item.classList[0].slice(3)
            item.setAttribute("att", att)
        })

    }, [])


    return (
        <>
            <ReactQuill modules={modules} theme="snow" value={preview} onChange={setPreview} />
        </>
    )
}

export default TextEditor

