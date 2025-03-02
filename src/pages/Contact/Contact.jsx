import React from 'react'
import './Contact.css'
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagramSquare
} from 'react-icons/fa'

import {FiSend} from 'react-icons/fi'

export default function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f64279a1-53a3-4acd-939f-4ec5687c28db");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert('Message sent successfully!');
      event.target.reset();
    }
    else {
      alert("Something went wrong! Please try again.");
    }
  };
  return (
    <section className='contact section'>
      <h2 className='section__title'>
        Get In <span>Touch</span>
      </h2>
      <div className='contact__container container grid'>
        <div className='contact__data'>
          <h3 className='contact__title'>Don't be Shy !</h3>
          <p className='contact__description'>
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <div className='contact__info'>
            <div className='info__item'>
              <FaEnvelopeOpen className='info__icon' />
              <div>
                <span className='info__title'>Mail me</span>
                <h4 className='info__desc'>gauranshivarshney@gmail.com</h4>
              </div>
            </div>
            <div className='info__item'>
              <FaPhoneSquareAlt className='info__icon' />
              <div>
                <span className='info__title'>Call me</span>
                <h4 className='info__desc'>+917253099079</h4>
              </div>
            </div>
          </div>
          <div className='contact__socials'>
            <a href='https://www.facebook.com/gauranshi.varshney' className='contact__social-link'>
              <FaFacebookF />
            </a>
            <a href='https://www.instagram.com/gauranshi_varshney/' className='contact__social-link'>
              <FaInstagramSquare />
            </a>
            <a href='https://x.com/GauranshiV51733' className='contact__social-link'>
              <FaTwitter />
            </a>
            <a href='https://www.youtube.com/@gauranshivarshney2702' className='contact__social-link'>
              <FaYoutube />
            </a>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact__form'>
          <div className='form__input-group'>
            <div className='form__input-div'>
              <input 
                type='text'
                name='name'
                placeholder='Your Name'
                className='form__control'
              />
            </div>
            <div className='form__input-div'>
              <input 
                type='email'
                name='email'
                placeholder='Your Email'
                className='form__control'
              />
            </div>
          </div>
          <div className='form__input-div'>
            <textarea
            name='message'
              placeholder='Your Message'
              className='form__control textarea'
            >
            </textarea>
          </div>
          <button className='button' type='submit'>
            Send Message
            <span className='button__icon contact__button-icon'>
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}
