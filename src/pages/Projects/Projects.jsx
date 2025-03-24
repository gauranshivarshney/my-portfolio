import React from 'react'
import './Projects.css'
import { projects } from '../../data'
import ProjectsItem from '../../components/ProjectsItem'

export default function Projects() {
  return (
    <section className='portfolio section'>
      <h2 className='section__title'>My <span>Projects</span></h2>
      <div className='portfolio__container container grid'>
        {projects.map((project) => (
          <ProjectsItem 
            key={project.id}
            img={project.img}
            title={project.title}
            techStack={project.techStack}
            liveDemo={project.liveDemo}
            github={project.github}
          />
        ))}
      </div>
    </section>
  )
}
