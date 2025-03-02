import React from 'react'
import './Home.css'
import Profile from '../../assets/home.jpg'
import {FaArrowRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <section className='home section grid'>
        <img src={Profile} alt='' className='home__img' />
        <div className='home__content'>
            <div className='home__data'>
                <h1 className='home__title'>
                    <span>I'm Gauranshi Varshney.</span> Frontend developer
                </h1>
                <p className='home__description'>
                    I'm frontend and full-stack developer focused on crafting clean & user-friendly experiences. I am passionate about building excellent software that improves the lives of those around me. 
                </p>
                <Link to='/about' className='button'>
                    More About Me{' '}
                    <span className='button__icon'>
                        <FaArrowRight />
                    </span>
                </Link>
            </div>
        </div>
        <div className='color__black'></div>
    </section>
  )
}
