import React from 'react'
import './Project.css'
import projects from '../../assets/mywork_data'
import mywork_data from '../../assets/mywork_data'

const Project = () => {
  return (
    <div id='project' className='mywork'>
        <div className="mywork-title">
            <h1>My Projects</h1>
        </div>
        <div className="mywrok-container">
            {projects.map((work,index)=>{
                return <img key={index} src={work.w_img} alt="" />
            })}
        </div>
    </div>
  )
}

export default Project
