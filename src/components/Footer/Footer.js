import React from 'react'
import './Footer.css';
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content1">
                    <h3>About Us</h3>
                    <p>The NCC at Hansraj College fosters leadership and discipline through community service,
                        adventure activities, and social awareness, instilling patriotism and duty in students.</p>
                </div>
                <div className="footer-content">
                    <h3>Contact Us</h3>
                    <a href='mailto:ncchansraj@gmail.com'>
                        <p>Email:ncchansraj@gmail.com</p>
                    </a>

                </div>
                <div className="footer-content">
                    <h3>Follow Us</h3>
                    <p>Stay connected with us on social media.</p>
                    <div className="social-icons">
                        <i className="fab fa-facebook-f"></i>
                        <a href='https://l.instagram.com/?u=https%3A%2F%2Fx.com%2Fncc_hansraj%3Fs%3D20&e=AT2iBhBPtRjXDKXzJ6i-GAq4au4yNktgEb-ZYdLbRrG-XS_eupPNjqulHcs9cU7yxeh4w_L6lE-_2ir_T_uYjAqGjwaD7zNjdnpIKDnwS1DlPGUC'>
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href='https://www.instagram.com/ncc_hansraj/'>
                            <i className="fab fa-instagram"></i>
                        </a>
                        <i className="fab fa-linkedin"></i>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>&copy; 2024 NCC Hansraj .All rights reserved.</p>
                <p>Made with Love By Cadet Lakshmi Priya</p>
            </div>
        </footer>
    )
}

export default Footer