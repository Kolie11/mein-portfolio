import React from 'react'
import SocialMedia from './SocialMedia'

function Footer() {
const date = new Date().getFullYear()

  return (
     <footer>
      <hr />
      <span>©{date} </span>
      <span className="my-name">Mathi<i>_Dev</i></span>

        <SocialMedia/>
   
      </footer>
  )
}

export default Footer