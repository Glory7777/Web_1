/* eslint-disable no-lone-blocks */
import { useState, useEffect, useRef  } from "react"

const useFullScreen = callback => {
    const element = useRef();
    const runCb = isFull => {
        if ( callback && typeof callback === "function") {
            callback(isFull);
        }
    };

    const triggerFull = () => {
        if (element.current) {
            if (element.current.requestFullscreen) {
                element.current.requestFullscreen();
            } else if (element.current.mozCancelFullScreen) {
                element.current.mozCancelFullScreen();
        } else if (element.current.webkitExitFullscreen) {
            element.current.webkitExitFullscreen();
        } 
        runCb(true);
    }
};

    const exitFull = () => {
        document.exitFullscreen();
            if (document.exitFullscreen) {
              document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
              document.webkitExitFullscreen();
            } 
            runCb(false);
          };
    return {element, triggerFull, exitFull};
};



export default useFullScreen ;