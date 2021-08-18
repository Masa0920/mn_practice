import React from 'react'
import "../static/css/works.css"

const WorksContent = (props) => {
   return (
      <div className='border-blueviolet w250 margin10 padding10 back-white flex-column'>
         <div className='container w250 center'>
            <p className='title font-weight-600 blue'>{props.title}</p>
            <p className='pink font-weight-600'>{props.date}</p>
            <p>{props.detail}</p>
         </div>
         <div className="flex-grow1"></div>
      </div>
   )
}

export default WorksContent
