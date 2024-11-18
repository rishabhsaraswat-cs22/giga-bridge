import { useSelector } from 'react-redux';
import { HashLink } from 'react-router-hash-link';
import { useRef, useState, useEffect } from 'react';
import noImage from '../assets/Images/no-image.png';
import { useNavigate } from 'react-router-dom';

export default function Nav() {
    const { loggedUser, avatar } = useSelector(state => state.user);
    const dropdown = useRef();
    const navRef = useRef();
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleProfile = () => {
        dropdown.current.classList.toggle('active');
        if (localStorage.getItem('userInfo')) {
            const userInfo = JSON.parse(localStorage.getItem('userInfo'));
            if (userInfo.role === "client") {
                navigate(`/dashboard/client/${userInfo._id}`);
            } else {
                navigate(`/dashboard/freelancer/${userInfo._id}`);
            }
        }
    };

    const handleLogOut = () => {
        dropdown.current.classList.toggle('active');
        if (localStorage.getItem('token') && localStorage.getItem('userInfo')) {
            localStorage.removeItem('token');
            localStorage.removeItem('userInfo');
            window.location.href = '/login';
        }
    };

    const toggle = () => {
        const links = document.querySelectorAll('nav a');
        const menu = document.querySelector('nav');
        const hamburger = document.querySelector('.hamburger');
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
        
        links.forEach(link => {
            link.onclick = () => {
                if (hamburger.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    menu.classList.remove('active');
                }
            };
        });
    };

    return (
        <div className={`Nav ${isScrolled ? 'scrolled' : ''}`} ref={navRef}>
            <div className="container">
                <header>
                    <div className="logo">
                        <HashLink to="/#">
                            <span className="work">Giga</span>
                            <span className="wonders">Bridge</span>
                        </HashLink>
                    </div>
                    <nav>
                        <span className='menu-logo'>
                            <span className="work">Giga</span>
                            <span className="wonders">Bridge</span>
                        </span>
                        
                        <div className="nav-links">
                            <HashLink to="/#" className="nav-link">Home</HashLink>
                            <HashLink to="/#services" smooth className="nav-link">Services</HashLink>
                            <HashLink to="/#aboutus" smooth className="nav-link">About Us</HashLink>
                            <HashLink to="/#contactus" smooth className="nav-link">Contact Us</HashLink>
                        </div>

                        {loggedUser == null ? (
                            <button className="sign-in-btn">
                                <HashLink to="/login">
                                    <span>Sign in</span>
                                </HashLink>
                            </button>
                        ) : (
                            <div className="menu">
                                <div className="profile-img-wrapper">
                                    <img 
                                        src={avatar === 'no-image.png' ? noImage : `http://localhost:3001/ProfilePic/${avatar}`} 
                                        onClick={() => dropdown.current.classList.toggle('active')} 
                                        alt="Profile" 
                                    />
                                </div>
                                <div ref={dropdown} className="dropdown">
                                    <div className="link" onClick={handleProfile}>
                                        <i className="fas fa-dashboard"></i>
                                        Dashboard
                                    </div>
                                    <div className="link" onClick={handleLogOut}>
                                        <i className="fas fa-sign-out-alt"></i>
                                        Log Out
                                    </div>
                                </div>
                            </div>
                        )}
                    </nav>
                    <div className="hamburger" onClick={toggle}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </header>
            </div>
        </div>
    );
}
