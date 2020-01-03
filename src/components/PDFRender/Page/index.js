import React, {useState, useEffect, useContext, useRef} from 'react';
import _p from 'prop-types'
import PDFContext from "../context";
const Page = props => {
    const {pdf,scale} = useContext(PDFContext)
    const {index} = props
    const canvasWrapper = useRef(null)
    const [width,
        setWidth] = useState(0)
    const [height,
        setHeight] = useState(0)
    useEffect(() => {
        if(pdf){
            pdf.getPage(index).then(page => {
                const viewport = page.getViewport(scale)
                const { width, height} = viewport
                const canvas = canvasWrapper.current
                const canvasContext = canvas.getContext("2d")
                canvas.width = width
                canvas.height = height
                page.render({canvasContext, viewport})
                setWidth(width)
                setHeight(height)
            })
        }
        
        return () => {};
    }, [pdf])
    return <div
        style={{
        width,
        height
    }}>
        <canvas ref={canvasWrapper}/>
    </div>
}
Page.propTypes = {
    index: _p.number.isRequired,
}

export default Page