import React from 'react'
function Services({logo, title, text}) {
  return (
   <div className="services-part">
 <div className="dev-services">
     <i>{logo}</i>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
        </div>
  )
}

export default Services