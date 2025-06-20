import React, { useState } from 'react'
import "./ProgressBar.css";

function ProgressBar({ progress }) {
   
    let filling = progress;
    console.log(filling)
  return (
    <div>
        <div className='ProgressBar'>
              <div
              className='inner-bar'
                  style={{
                      backgroundColor: "green",
                      width: `${progress}%`,
                  }}
              >
                  {progress}%
              </div>
        </div>
    </div>
  )
}
export default ProgressBar
