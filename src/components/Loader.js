import React from 'react';
import '../App.css'
import s26 from '../icons/sun/s26.png';
const Loader = () => {
  return (
    <div id="loader_sec">
        <div className="loader">
          <img src={s26} alt="" id="loader" />

        </div>
        <h2>Loading......</h2>
      </div>
  )
}

export default Loader