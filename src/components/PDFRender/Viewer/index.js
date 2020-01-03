import React, {useState, useEffect, useContext, Fragment} from 'react';
import Page from '../Page';
import PDFContext from '../context';
const Viewer = props => {
    const {pdf} = useContext(PDFContext)
    const numPages = pdf ? pdf._pdfInfo.numPages : 0
    const fingerPrint = pdf ? pdf._pdfInfo.fingerprint : "none"
    let pages = null
    if(numPages){
        pages = Array.apply(null, { length: numPages })
        .map((v, i) => (<Page index={i + 1} key={`${fingerPrint}-${i}`}/>))
    }
    useEffect(() => {
        return () => {};
    }, [numPages])
    return <Fragment>
       {pages}
    </Fragment>
}



export default Viewer