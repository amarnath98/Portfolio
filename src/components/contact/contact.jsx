import React from "react"
import { useForm, FormProvider } from "react-hook-form";
import "./contact.css"

const Contact = () => {

  const methods = useForm();
  const { register, formState } = methods;
  const { errors } = formState;

  const onSubmit = methods.handleSubmit(data => {
    methods.reset();
    // setSuccess(true); // Uncomment if you need to set success state
  });

  const isInvalid = Object.keys(errors).length > 0;

  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src="./assets/images/contact.png" alt='Contact img' />
                </div>
                <div className='details'>
                  <h1>Amarnath Pamidi</h1>
                  <p>Software Engineer</p>
                  <p>I am available for work. To connect with me via email please fill the form.</p> <br />
                  {/* <p>Phone: +01234567890</p>
                  <p>Email: admin@example.com</p> <br /> */}
                  <span>FIND ME</span>
                  <div className='button f_flex'>
                    <a href="https://www.linkedin.com/in/amarnath-pamidi/" target="_blank" rel="noopener noreferrer">
                  <button className='btn_shadow'>
                      <i className='fab fa-linkedin-in'></i>
                  </button>
                  </a>
                  <a href="https://github.com/amarnath98/" target="_blank" rel="noopener noreferrer">
                  <button className='btn_shadow'>
                      <i className='fab fa-github'></i>
                  </button>
                  </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <FormProvider {...methods}>
                <form action="https://formspree.io/f/xdoqzvle" method="POST" onSubmit={onSubmit}
                  noValidate
                  autoComplete="off"
                >
                  <div className="f_flex">
                    <div className={`input row ${errors.fullname ? 'error' : ''}`}>
                      <span>YOUR NAME</span>
                      <input
                        type="text"
                        name="fullname"
                        placeholder="Full Name*"
                        {...register('fullname', {
                          required: 'Name Required',
                          maxLength: {
                            value: 30,
                            message: '30 characters max',
                          },
                        })}
                      />
                      {errors.fullname && <span className="error">{errors.fullname.message}</span>}
                    </div>
                    <div className={`input row ${errors.phone ? 'error' : ''}`}>
                      <span>PHONE NUMBER</span>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number*"
                        {...register('phone', {
                          required: 'Phone number is required',
                          pattern: {
                            value: /^\d{10}$/,
                            message: 'Please enter a valid 10-digit phone number',
                          },
                        })}
                      />
                      {errors.phone && <span className="error">{errors.phone.message}</span>}
                    </div>
                  </div>
                  <div className={`input ${errors.email ? 'error' : ''}`}>
                    <span>EMAIL</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                          message: 'Please enter a valid email address',
                        },
                      })}
                    />
                    {errors.email && <span className="error">{errors.email.message}</span>}
                  </div>
                  <div className={`input ${errors.subject ? 'error' : ''}`}>
                    <span>SUBJECT</span>
                    <input
                      type="text"
                      name="subject"
                      placeholder="subject (optional)"
                      {...register('subject')}
                    />
                    {errors.subject && <span className="error">{errors.subject.message}</span>}
                  </div>
                  <div className={`input ${errors.message ? 'error' : ''}`}>
                    <span>YOUR MESSAGE</span>
                    <textarea
                      cols="30"
                      rows="10"
                      name="message"
                      placeholder="Message*"
                      {...register('message', {
                        required: 'Message is required',
                      })}
                    ></textarea>
                    {errors.message && <span className="error">{errors.message.message}</span>}
                  </div>
                  <button
                    type="submit" aria-label="Submit"
                    className={`btn_shadow ${isInvalid ? 'btn_shadow' : 'disabled'}`}
                    disabled={isInvalid}
                  >
                    SEND MESSAGE <i className="fa fa-long-arrow-right"></i>
                  </button>
                </form>


              </FormProvider>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact