import React, { useEffect, useState } from 'react'
import ContentLoader from "react-content-loader"

export const ProductLoader = () => {

    const [widthState, setWidthState] = useState(270)

    useEffect(() => {
        if (window.matchMedia("(max-width: 600px)").matches) {
           setWidthState(335)
        } else {
           setWidthState(270)
        }
    }, [])

    return (
        <ContentLoader 
            speed={2}
            width={widthState}
            height={650}
            viewBox={`0 0 ${widthState} 680`}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="00" y="36" rx="2" ry="2" width={widthState} height="35" />
            <rect x="00" y="82" rx="2" ry="2" width={widthState} height="5" /> 
            <rect x="00" y="112" rx="2" ry="2" width={widthState} height="131" /> 
            <rect x="00" y="280" rx="2" ry="2" width={widthState} height="25" /> 
            <rect x="00" y="310" rx="2" ry="2" width="150" height="25" /> 
            <rect x="00" y="350" rx="2" ry="2" width="80" height="35" /> 
            <rect x="150" y="350" rx="2" ry="2" width="140" height="35" /> 

            <rect x="00" y="410" rx="2" ry="2" width={widthState} height="25" /> 
            <rect x="00" y="440" rx="2" ry="2" width={widthState} height="25" /> 
            <rect x="00" y="470" rx="2" ry="2" width={widthState} height="25" /> 
            <rect x="00" y="500" rx="2" ry="2" width="180" height="25" /> 

            <rect x="00" y="540" rx="2" ry="2" width={widthState} height="45" /> 
            <rect x="00" y="590" rx="2" ry="2" width={widthState} height="45" /> 
           
        </ContentLoader>
    )
}
