import React, { useRef } from 'react';
import '../App.css';

function Video(props) {
    const videoRef = useRef(null);

    const handleClick = (e) => {
        e.preventDefault();
        e.target.muted = !e.target.muted;
    };

    const handleScroll = (e) => {
        const videoElement = videoRef.current;
        if (videoElement) {
            const next = videoElement.parentNode.nextSibling;
            if (next) {
                next.scrollIntoView();
                e.target.muted = true;
            }
        }
    };

    return (
        <video 
            ref={videoRef} 
            src={props.src} 
            onEnded={handleScroll} 
            className="videos-styling" 
            id={props.id} 
            onClick={handleClick} 
            muted
        ></video>
    );
}

export default Video;


// // Video.js
// import React from 'react';
// import '../App.css';
// import ReactDOM from 'react-dom';

// function Video(props) {
//     const handleClick = (e) => {
//         e.preventDefault();
//         e.target.muted = !e.target.muted;
//     };

//     const handleScroll = (e) => {
//         let next = ReactDOM.findDOMNode(e.target).parentNode.nextSibling;
//         if (next) {
//             next.scrollIntoView();
//             e.target.muted = true;
//         }
//     };

//     return (
//         <video src={props.src} onEnded={handleScroll} className="videos-styling" id={props.id} onClick={handleClick} muted="muted"></video>
//     );
// }

// export default Video;


// import React from 'react'
// import './Video.css'
// import ReactDOM from 'react-dom'

// function Video(props) {
//     const handleClick = (e) => {
//         e.preventDefault();
//         e.target.muted = !e.target.muted
//     }
//     const handleScroll = (e) => {
//         let next = ReactDOM.findDOMNode(e.target).parentNode.nextSibling
//         if(next){
//             next.scrollIntoView()
//             e.target.muted = true
//         }
//     }
//     return (
//         <video src={props.src} onEnded={handleScroll} className="videos-styling" id={props.id} onClick={handleClick} muted="muted" > </video>
//     )
// }
// export default Video