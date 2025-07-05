import React from 'react'
import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { RxSwitch } from "react-icons/rx";

function SwitchBtn() {
      const [darkMode, setDarkMode] = useState(false);
      function handleDarkModeClick() {
    setDarkMode((prev) => !prev);
  }

   useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    document.body.classList.toggle("light", !darkMode);
  });
  return (

         <div className="switch-mode">
         <FaRegMoon />
          <button onClick={handleDarkModeClick}>
            <RxSwitch />
          </button>
        </div>

  )
}

export default SwitchBtn