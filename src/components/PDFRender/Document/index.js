import React, {useState, useEffect} from 'react';
import _p from 'prop-types'
const pdfjsLib = window['pdfjs-dist/build/pdf'];
import PDFContext from '../context';
const Provider = PDFContext.Provider

 const Document = props => {
     const {src, children} = props
    const [pdf, setPdf] = useState(null)
    const [scale, setScale] = useState(1.2)
     useEffect(() => {
         pdfjsLib.getDocument(src).then((pdf) => {
             setPdf(pdf)
         })
       return () => {};
     }, [scale])
     const contextValue = {
         pdf, scale
     }
    return <Provider value={contextValue}>
    {children}
    </Provider>
}


Document.propTypes = {
    src: _p.string.isRequired,
    scale: _p.number
}
export default Document