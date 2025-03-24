import React, { useState } from 'react'
import Close from '../assets/close.svg'

const ProjectsItem = ({ img, title, techStack, liveDemo, github }) => {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <div className='portfolio__item'>
            <img src={img} alt={title} className='portfolio__img' />
            <div className='portfolio__hover' onClick={toggleModal}>
                <h3 className='portfolio__title'>{title}</h3>
            </div>
            {modal && (
                <div className='portfolio__modal'>
                    <div className='portfolio__modal-content'>
                        <img src={Close} alt='Close' className='modal__close' onClick={toggleModal}/>
                        <h3 className='modal__title'>{title}</h3>
                        <div className='modal__tech-stack'>
                            <h4>Tech Stack:</h4>
                            <ul>
                                {techStack.map((tech, index) => (
                                    <li key={index} className='tech__item'>{tech}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='modal__links'>
                            {liveDemo && <a href={liveDemo} target='_blank' className='modal__button'>Live Demo</a>}
                            {github && <a href={github} target='_blank' className='modal__button'>GitHub</a>}
                        </div>
                        <img src={img} alt='' className='modal__img' />
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProjectsItem