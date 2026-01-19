import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import portfolioJson from './portfolio.json';

export default function Contact() {
  const content = portfolioJson._contact;

  const form = useRef();

  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const contactStatus = document.querySelector('.portfolio-contact__status');
    const contactInputName = document.getElementById('user-name');
    const contactInputEmail = document.getElementById('user-email');
    const contactInputMessage = document.getElementById('user-message');

    emailjs
      .sendForm('service_6szbs1b', 'template_dfjxg1o', form.current, {
        publicKey: 'A9yqqNrNGnBWcsHLj',
      })
      .then((result) => {
        // console.log(result.text);
        setStatusMessage('Message sent');
        contactStatus.className = 'portfolio-contact__status is-success';
        setTimeout(() => {
          setStatusMessage('');
          contactStatus.className = 'portfolio-contact__status';
          contactInputName.value = '';
          contactInputEmail.value = '';
          contactInputMessage.value = '';
        }, 5000);
      }, (error) => {
        // console.log(error.text);
        setStatusMessage('Failed to send message, please try again');
        contactStatus.className = 'portfolio-contact__status is-error';
        setTimeout(() => {
          setStatusMessage('');
          contactStatus.className = 'portfolio-contact__status';
          contactInputName.value = '';
          contactInputEmail.value = '';
          contactInputMessage.value = '';
        }, 5000);
      });
  };

  return (
    <section className='portfolio-contact'>
      <div className='portfolio-contact__inner'>

        <form
          id='portfolio-contact-form'
          className='portfolio-contact__form'
          ref={form}
          onSubmit={sendEmail}
        >

          <div className='portfolio-contact__name'>
            <label htmlFor='user-name'>
              {content.name}
            </label>
            <input
              id='user-name'
              className='portfolio-contact__name-input'
              type='text'
              name='user_name'
              placeholder={content.namePlaceholder}
              required
            />
          </div>

          <div className='portfolio-contact__email'>
            <label htmlFor='user-email'>
              {content.email}
            </label>
            <input
              id='user-email'
              className='portfolio-contact__email-input'
              type='email'
              name='user_email'
              placeholder={content.emailPlaceholder}
              required
            />
          </div>

          <div className='portfolio-contact__message'>
            <label htmlFor='user-message'>
              {content.message}
            </label>
            <textarea
              id='user-message'
              className='portfolio-contact__message-input'
              rows='5'
              name='message'
              placeholder={content.messagePlaceholder}
              maxLength='1500'
              required
            />
          </div>

          <div className='portfolio-contact__btn-container'>
            <input
              className='btn-text portfolio-contact__btn'
              type='submit'
              value={content.button}
            />
          </div>

        </form>

        <div className='portfolio-contact__status'>
          {statusMessage}
        </div>
      </div>
    </section>
  );
}
