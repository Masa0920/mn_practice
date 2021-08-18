import React from 'react'
import DetailButton from './DetailButton'
import "../static/css/study.css"

const StudyContent = (props) => {
   return (
      <div className='border-blueviolet w200 margin10 padding10 back-white flex-column'>
         <div className='container center'>
            <p className='font-weight-600 blue'>{props.title}</p>
            <p className='date pink font-weight-600'>{props.date}</p>
         </div>
         <p>{props.detail}</p>
         <div className="flex-grow1"></div>
         <DetailButton h2={props.h2} desc={props.desc}/>
      </div>
   )
}

export default StudyContent
