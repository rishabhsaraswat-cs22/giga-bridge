import hero from '../assets/svgs/Hero.svg'
import blob from '../assets/svgs/blob.svg'
import webDeveloperService from '../assets/svgs/web developer.svg'
import webDesignService from '../assets/svgs/web design.svg'
import mobileService from '../assets/svgs/mobile developer.svg'
import aboutUs from '../assets/svgs/about us.svg'
import contactUs from '../assets/svgs/contact us.svg'
import { HashLink } from 'react-router-hash-link';
import { tokenExists } from '../Redux/UserSlice';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useRef } from 'react';
import { toast } from 'react-toastify'

export default function Home() {
    const { token } = useSelector(state => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const fullName = useRef()
    const email = useRef()
    const message = useRef()

    useEffect(() => {
        tokenExists(token, navigate, dispatch)
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        let err = []
        const myForm = {
            fullName: (fullName.current.value).trim(),
            email: (email.current.value).trim(),
            message: (message.current.value).trim(),
        }
        if (!/^[a-zA-Z\s]+$/.test(myForm.fullName)) {
            err.push('Full Name invalid. It must only contain letters and space')
        }
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(myForm.email)) {
            err.push('Email invalid. It must be in the format example@example.com');
        }
        if (myForm.message.length < 10) {
            err.push('Message Should Contain More Than 10 Caracters')
        }
        if ((myForm.fullName == "" && myForm.email == "" && myForm.message.value == "") || err.length != 0) {
            if (myForm.fullName == "" && myForm.email == "" && message.current.value == "") {
                toast.error('Please Fill The Inputs')
            }
            else
                toast.error(
                    <div>
                        {err.map((e, i) => <p key={i}>{e}</p>)}
                    </div>,
                    {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    }
                );
        }
        else {
            fullName.current.value = ""
            email.current.value = ""
            message.current.value = ""
            toast.success(<p>Thank You For Contacting Us.<br /><br /> We Will Look At Your Message As Soon As Possible</p>)
        }
    }
    return (
        <div className='Home'>
            <div className="container">
                <main id='#'>
                    <div className="description" data-aos='fade-up' data-aos-delay="350" >
                        <div className='hero-description'>Top Freelancers And Services At Your Fingertips</div>
                        <p>Whether you're a business looking for support or a freelancer looking for work, we've got you covered</p>
                        <HashLink to="/signup"><button>Get Started</button></HashLink>
                    </div>
                    <div className="hero" data-aos='fade-up' data-aos-delay="350">
                        <img src={hero} className='hero-img' alt="Hero Image" />
                        <img src={blob} className='blob-img' alt="Blob Image" />
                    </div>
                </main>
                <section>
                    <div className="services" id='services'>
                        <div className="custom-headline">
                            Services
                        </div>
                        <div className="service">
                            <div className="service-headline">Web Developement</div>
                            <div className="service-description">
                                <div data-aos="fade-right" >
                                    <svg width="500" height="400" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <linearGradient id="webDevGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" style={{stopColor: '#4e54c8'}} />
                                                <stop offset="100%" style={{stopColor: '#8f94fb'}} />
                                            </linearGradient>
                                        </defs>
                                        <rect x="50" y="50" width="400" height="300" rx="15" fill="url(#webDevGradient)" opacity="0.1"/>
                                        <rect x="70" y="80" width="360" height="30" rx="5" fill="url(#webDevGradient)" opacity="0.8"/>
                                        <circle cx="85" cy="95" r="5" fill="url(#webDevGradient)" opacity="0.9"/>
                                        <circle cx="105" cy="95" r="5" fill="url(#webDevGradient)" opacity="0.9"/>
                                        <circle cx="125" cy="95" r="5" fill="url(#webDevGradient)" opacity="0.9"/>
                                        <rect x="70" y="130" width="150" height="200" rx="5" fill="url(#webDevGradient)" opacity="0.4"/>
                                        <rect x="240" y="130" width="190" height="90" rx="5" fill="url(#webDevGradient)" opacity="0.6"/>
                                        <rect x="240" y="240" width="190" height="90" rx="5" fill="url(#webDevGradient)" opacity="0.6"/>
                                        <rect x="85" y="150" width="120" height="10" rx="2" fill="url(#webDevGradient)" opacity="0.9"/>
                                        <rect x="85" y="170" width="100" height="10" rx="2" fill="url(#webDevGradient)" opacity="0.7"/>
                                        <rect x="85" y="190" width="110" height="10" rx="2" fill="url(#webDevGradient)" opacity="0.7"/>
                                    </svg>

                                </div>
                                <div className="service-info" data-aos="fade-up">
                                    Whether you need a custom website built from scratch, an existing website redesigned, or ongoing maintenance and updates, we have the skills and experience to get the job done
                                </div>
                            </div>
                        </div>
                        <div className="service">
                            <div className="service-headline">Web Design</div>
                            <div className="service-description reverse">
                                <div data-aos="fade-up">
                                    <svg width="500" height="400" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <linearGradient id="designGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" style={{stopColor: '#4e54c8'}} />
                                                <stop offset="100%" style={{stopColor: '#8f94fb'}} />
                                            </linearGradient>
                                        </defs>
                                        <rect x="50" y="50" width="400" height="300" rx="20" fill="url(#designGradient)" opacity="0.1"/>
                                        <rect x="80" y="80" width="340" height="240" rx="10" fill="url(#designGradient)" opacity="0.8"/>
                                        <rect x="100" y="100" width="140" height="80" rx="5" fill="url(#designGradient)" opacity="0.6"/>
                                        <rect x="260" y="100" width="140" height="80" rx="5" fill="url(#designGradient)" opacity="0.4"/>
                                        <rect x="100" y="200" width="300" height="100" rx="5" fill="url(#designGradient)" opacity="0.2"/>
                                        <circle cx="120" y="120" r="10" fill="url(#designGradient)" opacity="0.9"/>
                                        <circle cx="150" y="120" r="10" fill="url(#designGradient)" opacity="0.9"/>
                                        <circle cx="180" y="120" r="10" fill="url(#designGradient)" opacity="0.9"/>
                                    </svg>
                                </div>
                                <div className="service-info" data-aos="fade-right">
                                    We offer professional web design services to help businesses and individuals create an online presence that is both visually appealing and user-friendly
                                </div>
                            </div>
                        </div>
                        <div className="service">
                            <div className="service-headline">Mobile Developement</div>
                            <div className="service-description">
                                <div data-aos="fade-right">
                                    <svg width="500" height="400" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <linearGradient id="mobileGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" style={{stopColor: '#4e54c8'}} />
                                                <stop offset="100%" style={{stopColor: '#8f94fb'}} />
                                            </linearGradient>
                                        </defs>
                                        <rect x="150" y="50" width="200" height="300" rx="20" fill="url(#mobileGradient)" opacity="0.1"/>
                                        <rect x="170" y="70" width="160" height="260" rx="10" fill="url(#mobileGradient)" opacity="0.8"/>
                                        <circle cx="250" cy="290" r="15" fill="url(#mobileGradient)" opacity="0.6"/>
                                        <rect x="235" y="90" width="30" height="5" rx="2.5" fill="url(#mobileGradient)" opacity="0.4"/>
                                        <rect x="190" y="120" width="120" height="150" rx="5" fill="url(#mobileGradient)" opacity="0.2"/>
                                    </svg>
                                </div>
                                <div className="service-info" data-aos="fade-up">
                                    If you're in need of high-quality apps for IOS
                                    and Android, our developers have the skills
                                    and expertise to make it happen.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-us" id='aboutus'>
                        <div className="custom-headline">
                            About Us
                        </div>
                        <div className="about-us-description reverse" >
                            <div data-aos="fade-up">
                                <svg width="500" height="400" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style={{stopColor: '#4e54c8'}} />
                                            <stop offset="100%" style={{stopColor: '#8f94fb'}} />
                                        </linearGradient>
                                    </defs>
                                    <rect x="50" y="50" width="400" height="300" rx="20" fill="url(#aboutGradient)" opacity="0.1"/>
                                    <circle cx="250" cy="150" r="60" fill="url(#aboutGradient)" opacity="0.8"/>
                                    <rect x="190" y="240" width="120" height="10" rx="5" fill="url(#aboutGradient)" opacity="0.6"/>
                                    <rect x="160" y="270" width="180" height="10" rx="5" fill="url(#aboutGradient)" opacity="0.4"/>
                                    <rect x="130" y="300" width="240" height="10" rx="5" fill="url(#aboutGradient)" opacity="0.2"/>
                                </svg>
                            </div>
                            <div className="about-us-info" data-aos="fade-right">
                                At Giga Bridge, our team is dedicated to making sure that every client is completely satisfied with the work we do. Whether you're looking for a new website, marketing materials, or any other type of service, we'll work with you to understand your needs and goals, and then create a customized solution that meets your unique requirements.
                            </div>
                        </div>
                    </div>
                    <div className="contact-us" id='contactus' style={{
                        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                        padding: '3rem',
                        borderRadius: '20px',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            width: '100px',
                            height: '100px',
                            background: 'linear-gradient(135deg, #4e54c8, #8f94fb)',
                            borderRadius: '50%',
                            opacity: '0.1'
                        }}></div>
                        <div className="custom-headline" style={{
                            fontSize: '2.5rem',
                            fontWeight: 'bold',
                            marginBottom: '2rem',
                            background: 'linear-gradient(135deg, #4e54c8, #8f94fb)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textAlign: 'center'
                        }}>
                            Get In Touch With Us
                        </div>
                        <div className="contact-us-description reverse" style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '2rem'
                        }}>
                            <div data-aos="fade-up" style={{flex: 1}}>
                                <img src={contactUs} alt="Contact Us Image" style={{
                                    width: '100%',
                                    borderRadius: '15px',
                                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                                    transition: 'transform 0.3s ease',
                                    cursor: 'pointer'
                                }} onMouseOver={e => e.target.style.transform = 'scale(1.02)'} 
                                   onMouseOut={e => e.target.style.transform = 'scale(1)'} />
                            </div>
                            <div data-aos="fade-right" style={{flex: 1}}>
                                <form onSubmit={e => handleSubmit(e)} style={{
                                    background: 'white',
                                    padding: '2rem',
                                    borderRadius: '15px',
                                    boxShadow: '0 4px 16px rgba(0,0,0,0.05)'
                                }}>
                                    <div className="form-section" style={{marginBottom: '1.5rem'}}>
                                        <label htmlFor="name" style={{
                                            display: 'block',
                                            fontSize: '1.1rem',
                                            fontWeight: '600',
                                            color: '#4e54c8',
                                            marginBottom: '0.5rem'
                                        }}>Full Name</label>
                                        <input type="text" ref={fullName} placeholder='John Doe' name="name" id="name" style={{
                                            width: '90%',
                                            padding: '12px 15px',
                                            border: '2px solid #4e54c8',
                                            borderRadius: '8px',
                                            fontSize: '1rem',
                                            transition: 'all 0.3s ease',
                                            backgroundColor: '#f8f9fa',
                                            color: '#4e54c8',
                                            boxSizing: 'border-box',
                                            outline: 'none',
                                            '::placeholder': {
                                                color: '#4e54c8'
                                            }
                                        }} onFocus={e => {
                                            e.target.style.boxShadow = '0 0 0 3px rgba(78, 84, 200, 0.2)';
                                            e.target.style.borderColor = '#8f94fb';
                                        }} 
                                           onBlur={e => {
                                            e.target.style.boxShadow = 'none';
                                            e.target.style.borderColor = '#4e54c8';
                                        }} />
                                    </div>
                                    <div className="form-section" style={{marginBottom: '1.5rem'}}>
                                        <label htmlFor="email" style={{
                                            display: 'block',
                                            fontSize: '1.1rem',
                                            fontWeight: '600',
                                            color: '#4e54c8',
                                            marginBottom: '0.5rem'
                                        }}>Email</label>
                                        <input type="text" ref={email} placeholder='johndoe@gmail.com' name="email" id="email" style={{
                                            width: '90%',
                                            padding: '12px 15px',
                                            border: '2px solid #4e54c8',
                                            borderRadius: '8px',
                                            fontSize: '1rem',
                                            transition: 'all 0.3s ease',
                                            backgroundColor: '#f8f9fa',
                                            color: '#4e54c8',
                                            boxSizing: 'border-box',
                                            outline: 'none',
                                            '::placeholder': {
                                                color: '#4e54c8'
                                            }
                                        }} onFocus={e => {
                                            e.target.style.boxShadow = '0 0 0 3px rgba(78, 84, 200, 0.2)';
                                            e.target.style.borderColor = '#8f94fb';
                                        }} 
                                           onBlur={e => {
                                            e.target.style.boxShadow = 'none';
                                            e.target.style.borderColor = '#4e54c8';
                                        }} />
                                    </div>
                                    <div className="form-section" style={{marginBottom: '1.5rem'}}>
                                        <label htmlFor="message" style={{
                                            display: 'block',
                                            fontSize: '1.1rem',
                                            fontWeight: '600',
                                            color: '#4e54c8',
                                            marginBottom: '0.5rem'
                                        }}>Message</label>
                                        <textarea name="message" ref={message} maxLength={255} id="message" placeholder="Enter Your Message" style={{
                                            width: '90%',
                                            padding: '12px 15px',
                                            border: '2px solid #4e54c8',
                                            borderRadius: '8px',
                                            fontSize: '1rem',
                                            minHeight: '120px',
                                            resize: 'vertical',
                                            transition: 'all 0.3s ease',
                                            backgroundColor: '#f8f9fa',
                                            color: '#4e54c8',
                                            boxSizing: 'border-box',
                                            outline: 'none',
                                            '::placeholder': {
                                                color: '#4e54c8'
                                            }
                                        }} onFocus={e => {
                                            e.target.style.boxShadow = '0 0 0 3px rgba(78, 84, 200, 0.2)';
                                            e.target.style.borderColor = '#8f94fb';
                                        }} 
                                           onBlur={e => {
                                            e.target.style.boxShadow = 'none';
                                            e.target.style.borderColor = '#4e54c8';
                                        }}>
                                        </textarea>
                                    </div>
                                    <button style={{
                                        width: '90%',
                                        padding: '12px 30px',
                                        background: 'linear-gradient(135deg, #4e54c8, #8f94fb)',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '25px',
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 4px 15px rgba(78, 84, 200, 0.2)'
                                    }} onMouseOver={e => {
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 6px 20px rgba(78, 84, 200, 0.3)';
                                    }}
                                       onMouseOut={e => {
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = '0 4px 15px rgba(78, 84, 200, 0.2)';
                                    }}>
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <footer>
                <div className="footer-head" style={{
                    fontSize: '3rem',
                    fontWeight: '700',
                    background: 'linear-gradient(135deg, #ffffff, #f0f0f0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                    letterSpacing: '2px',
                    marginBottom: '2rem'
                }}>
                    GigaBridge
                </div>
                <p className="footer-body" style={{
                    maxWidth: '800px',
                    lineHeight: '1.8',
                    fontSize: '1.2rem',
                    color: 'rgba(255,255,255,0.9)',
                    textAlign: 'center',
                    padding: '0 2rem',
                    marginBottom: '3rem',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                }}>
                    Connecting talented freelancers with clients through expert web development, design, and marketing services.
                </p>
                <div className="footer-footer">
                    <div className="copyright">
                        Copyright Giga Bridge ©2023 | All Rights Reserved
                    </div>
                    <div className="socials">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                    </div>
                </div>
            </footer>
        </div>
    )
}
