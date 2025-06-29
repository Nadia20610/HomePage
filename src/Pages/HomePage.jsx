import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../style/HomePage.css'
import { useState, useEffect } from 'react'

export const useTheme = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    return { theme, toggleTheme };
};

function HomePage() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="home-page" style={{ fontFamily: "'Nunito', sans-serif" }} >

            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    {/* <!-- Logo --> */}
                    <a className="navbar-brand" href="#">
                        <img className="logo-img" src="https://sharmgo.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6IjA4YTgxNTE0LTE2ZjItNGViZS1iNzU5LTBlZjAxODkwMzJiYSIsInB1ciI6ImJsb2JfaWQifX0=--9e7da05196e6c613fcbae74efab3f77f6eb5ffb9/1a2q9sjl.png" alt="MeemDTT Logo" />
                    </a>

                    {/* <!-- Hamburger Button (for mobile) --> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarButtons"
                        aria-controls="navbarButtons" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* <!-- Buttons go inside here so they collapse on small screens --> */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarButtons">

                        <ul className="navbar-nav  align-items-lg-center gap-3 flex-column flex-lg-row mobile-menu-items">
                            {/* <!-- Theme Toggle --> */}
                            <li className="nav-item">
                                <button
                                    className="theme-toggle nav-link border-0 bg-transparent p-0"
                                    onClick={toggleTheme}
                                >
                                    <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
                                </button>
                            </li>

                            {/* <!-- Sign In --> */}
                            <li className="nav-item">
                                <a href="https://sharmgo.com/signin">
                                    <button className="btn btn-outline-primary w-100 w-lg-auto">Sign In</button></a>
                            </li>

                            {/* <!-- Sign Up --> */}
                            <li className="nav-item">
                                <a href="https://sharmgo.com/signup"><button className="btn btn-primary w-100 w-lg-auto">Sign Up</button></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>




            {/* <!-- Hero Section --> */}
            <section className="hero-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 hero-content">
                            <h1 className="hero-title">Welcome to MeemDTT</h1>
                            <p className="hero-subtitle">
                                Open-source web conferencing system designed for online learning and virtual classNamerooms.
                                Share presentations, collaborate on whiteboards, and engage students with polls and breakout rooms.
                            </p>
                            <div className="d-flex flex-wrap gap-3">
                                <a href="https://sharmgo.com/signup"> <button className="btn btn-primary btn-lg">
                                    <i className="fas fa-play me-2"></i>Start Meeting
                                </button></a>
                                <a href="https://sharmgo.com/signup"> <button className="btn btn-outline-primary btn-lg">
                                    <i className="fas fa-calendar me-2"></i>Schedule Meeting
                                </button></a>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center">
                            <div className="hero-image mt-5 mt-lg-0">
                                <lord-icon loading="lazy" className="imgl" src="https://cdn.lordicon.com/cfoaotmk.json" trigger="hover" stroke="light"
                                    colors="primary:#624995,secondary:#c05382" style={{ width: '250px', height: '250px' }}>        </lord-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Features Section --> */}
            <section className="features-section">
                <div className="container">
                    <div className="row text-center mb-5">
                        <div className="col-12">
                            <h2 className="display-4 fw-bold mb-3" style={{ color: "var(--text-primary)" }}>Explore Our Features</h2>
                            <p className="lead" style={{ color: "var(--text-secondary)" }}>Everything you need for online learning and web
                                conferencing</p>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-video"></i>
                                </div>
                                <h3 className="feature-title">Real-time Video & Audio</h3>
                                <p className="feature-description">
                                    High-quality WebRTC-based video conferencing with crystal-clear audio.
                                    Supports multiple webcams and microphones simultaneously.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-chalkboard-teacher"></i>
                                </div>
                                <h3 className="feature-title">Interactive Whiteboard</h3>
                                <p className="feature-description">
                                    Multi-user whiteboard with drawing tools, text annotations, and shape tools.
                                    Perfect for collaborative learning and visual presentations.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-desktop"></i>
                                </div>
                                <h3 className="feature-title">Screen & Presentation Sharing</h3>
                                <p className="feature-description">
                                    Share presentations, documents, and entire screen.
                                    Upload PDF, PowerPoint, and Office documents for seamless presentation.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-users"></i>
                                </div>
                                <h3 className="feature-title">Breakout Rooms</h3>
                                <p className="feature-description">
                                    Create multiple breakout rooms for small group discussions.
                                    Moderators can move between rooms and broadcast messages to all groups.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Advanced Features Section --> */}
            <section className="advanced-features" style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <h2 className="display-4 fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>Why Choose MeemDTT?</h2>
                            <p className="lead" style={{ color: 'var(--text-secondary)' }}>Advanced features designed for education and
                                collaboration</p>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="advanced-feature-card"
                                style={{
                                    background: 'var(--bg-primary)',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: 15,
                                    padding: 30,
                                    transition: 'all 0.3s ease'
                                }}>
                                <div className="d-flex align-items-center mb-3">
                                    <div
                                        style={{ width: '50px', height: '50px', background: 'linear-gradient(135deg, #624995, #c05382)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px' }}>
                                        <i className="fas fa-poll" style={{ color: 'white', fontSize: '1.2rem' }}></i>
                                    </div>
                                    <h4 style={{ color: 'var(--text-primary)', margin: 0 }}>Live Polling & Quizzes</h4>
                                </div>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>Create interactive polls and quizzes to
                                    engage participants and gather real-time feedback during sessions.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="advanced-feature-card"
                                style={{
                                    background: 'var(--bg-primary)',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: 15,
                                    padding: 30,
                                    transition: 'all 0.3s ease'
                                }}>
                                <div className="d-flex align-items-center mb-3">
                                    <div
                                        style={{ width: '50px', height: '50px', background: 'linear-gradient(135deg, #624995, #c05382)', bordeRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px' }}>
                                        <i className="fas fa-comments" style={{ color: 'white', fontSize: '1.2rem' }}></i>
                                    </div>
                                    <h4 style={{ color: 'var(--text-primary)', margin: 0 }}>Public & Private Chat</h4>
                                </div>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>Group chat for all participants plus
                                    private messaging between users and moderators.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="advanced-feature-card"
                                style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '15px', padding: '30px', transition: 'all 0.3s ease' }}>
                                <div className="d-flex align-items-center mb-3">
                                    <div
                                        style={{ width: '50px', height: '50px', background: 'linear-gradient(135deg, #624995, #c05382)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px' }}>
                                        <i className="fas fa-hand-paper" style={{ color: 'white', fontSize: '1.2rem' }}></i>
                                    </div>
                                    <h4 style={{ color: 'var(--text-primary)', margin: 0 }}>Raise Hand & Emoji Reactions</h4>
                                </div>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>Non-verbal feedback with raise hand
                                    feature and emoji reactions for better classNameroom interaction.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="advanced-feature-card"
                                style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '15px', padding: '30px', transition: 'all 0.3s ease' }}>
                                <div className="d-flex align-items-center mb-3">
                                    <div
                                        style={{ width: '50px', height: '50px', background: 'linear-gradient(135deg, #624995, #c05382)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px' }}>
                                        <i className="fas fa-record-vinyl" style={{ color: 'white', fontSize: '1.2rem' }}></i>
                                    </div>
                                    <h4 style={{ color: 'var(--text-primary)', margin: 0 }}>Session Recording</h4>
                                </div>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>Record entire sessions including video,
                                    audio, screen sharing, and whiteboard interactions.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="advanced-feature-card"
                                style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '15px', padding: '30px', transition: 'all 0.3s ease' }}>
                                <div className="d-flex align-items-center mb-3">
                                    <div
                                        style={{ width: '50px', height: '50px', background: 'linear-gradient(135deg, #624995, #c05382)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px' }}>
                                        <i className="fas fa-mobile-alt" style={{ color: 'white', fontSize: '1.2rem' }}></i>
                                    </div>
                                    <h4 style={{ color: 'var(--text-primary)', margin: 0 }}>Mobile Responsive</h4>
                                </div>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>HTML5 client works on all devices -
                                    desktop, tablet, and mobile without any downloads required.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="advanced-feature-card"
                                style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '15px', padding: '30px', transition: 'all 0.3s ease' }}>
                                <div className="d-flex align-items-center mb-3">
                                    <div
                                        style={{ width: '50px', height: '50px', background: 'linear-gradient(135deg, #624995, #c05382)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px' }}>
                                        <i className="fas fa-cog" style={{ color: 'white', fontSize: '1.2rem' }}></i>
                                    </div>
                                    <h4 style={{ color: 'var(--text-primary)', margin: 0 }}>Moderator Controls</h4>
                                </div>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>Comprehensive moderation tools including
                                    mute controls, user management, and presentation permissions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Pricing Section --> */}
            <section className="pricing-section" style={{ padding: '80px 0', background: 'var(--bg-primary)' }}>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <h2 className="display-4 fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>Open Source & Flexible Hosting
                            </h2>
                            <p className="lead" style={{ color: 'var(--text-secondary)' }}>Choose how you want to deploy MeemDTT</p>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4">
                            <div className="pricing-card"
                                style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '40px 30px', textAlign: 'center', transition: 'all 0.3s ease', height: '100%' }}>
                                <h3 style={{ color: 'var(--text-primary)', marginBottom: '20px' }}>Self-Hosted</h3>
                                <div style={{ marginBottom: '30px' }}>
                                    <span style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--primary-color)' }}>Free</span>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
                                    <li style={{ padding: '10px 0', color: 'var(--text-secondary)' }}><i className="fas fa-check"
                                        style={{ color: 'var(--primary-color)', marginRight: '10px' }}></i>Open source LGPL license
                                    </li>
                                    <li style={{ padding: '10px 0', color: 'var(--text-secondary)' }}><i className="fas fa-check"
                                        style={{ color: 'var(--primary-color)', marginRight: '10px' }}></i>Full source code access
                                    </li>
                                    <li style={{ padding: '10px 0', color: 'var(--text-secondary)' }}><i className="fas fa-check"
                                        style={{ color: 'var(--primary-color)', marginRight: '10px' }}></i>Community support</li>
                                    <li style={{ padding: '10px 0', color: 'var(--text-secondary)' }}><i className="fas fa-check"
                                        style={{ color: 'var(--primary-color)', marginRight: '10px' }}></i>Unlimited customization
                                    </li>
                                </ul>
                                <a href="https://sharmgo.com/signup"><button className="btn btn-outline-primary w-100">Get Started</button></a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="pricing-card"
                                style={{ background: 'var(--bg-primary)', border: '2px solid var(--primary-color)', borderRadius: '20px', padding: '40px 30px', textAlign: 'center', transition: 'all 0.3s ease', height: '100%', position: 'relative' }}>
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '-15px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        background: 'var(--primary-color)',
                                        color: 'white',
                                        padding: '5px 20px',
                                        borderRadius: '20px',
                                        fontSize: '0.9rem',
                                        fontWeight: 600
                                    }}>
                                    Most Popular
                                </div>
                                <h3 style={{ color: 'var(--text-primary)', marginBottom: '20px' }}>Cloud Hosting</h3>
                                <div style={{ marginBottom: '30px' }}>
                                    <span style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--primary-color)' }}>Free</span>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
                                    <li style={{ padding: '10px 0', color: 'var(--text-secondary)' }}>
                                        <i className="fas fa-check" style={{ color: 'var(--primary-color)', marginRight: '10px' }}></i>
                                        Open source LGPL license
                                    </li>
                                    <li style={{ padding: '10px 0', color: 'var(--text-secondary)' }}>
                                        <i className="fas fa-check" style={{ color: 'var(--primary-color)', marginRight: '10px' }}></i>
                                        Full source code access
                                    </li>
                                    <li style={{ padding: '10px 0', color: 'var(--text-secondary)' }}>
                                        <i className="fas fa-check" style={{ color: 'var(--primary-color)', marginRight: '10px' }}></i>
                                        Community support
                                    </li>
                                    <li style={{ padding: '10px 0', color: 'var(--text-secondary)' }}>
                                        <i className="fas fa-check" style={{ color: 'var(--primary-color)', marginRight: '10px' }}></i>
                                        Unlimited customization
                                    </li>
                                </ul>
                                <a href="https://sharmgo.com/signup"> <button className="btn btn-outline-primary w-100">Get Started</button></a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="pricing-card"
                                style={{
                                    background: 'var(--bg-secondary)',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: '20px',
                                    padding: '40px 30px',
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease',
                                    height: '100%'
                                }}>
                                <h3 style={{ color: 'var(--text-primary)', marginBottom: '20px' }}>Enterprise</h3>
                                <div style={{ marginBottom: '30px' }}>
                                    <span style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--primary-color)' }}>Free</span>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
                                    <li style={{ padding: '10px 0', color: 'var(--text-secondary)' }}>
                                        <i className="fas fa-check" style={{ color: 'var(--primary-color)', marginRight: '10px' }}></i>
                                        Open source LGPL license
                                    </li>
                                    <li style={{ padding: '10px 0', color: 'var(--text-secondary)' }}>
                                        <i className="fas fa-check" style={{ color: 'var(--primary-color)', marginRight: '10px' }}></i>
                                        Full source code access
                                    </li>
                                    <li style={{ padding: '10px 0', color: 'var(--text-secondary)' }}>
                                        <i className="fas fa-check" style={{ color: 'var(--primary-color)', marginRight: '10px' }}></i>
                                        Community support
                                    </li>
                                    <li style={{ padding: '10px 0', color: 'var(--text-secondary)' }}>
                                        <i className="fas fa-check" style={{ color: 'var(--primary-color)', marginRight: '10px' }}></i>
                                        Unlimited customization
                                    </li>
                                </ul>
                                <a href="https://sharmgo.com/signup"> <button className="btn btn-outline-primary w-100">Get Started</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- FAQ Section --> */}
            <section className="faq-section" style={{ padding: '80px 0', background: 'var(--bg-primary)' }}>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <h2 className="display-4 fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>Frequently Asked Questions</h2>
                            <p className="lead" style={{ color: 'var(--text-secondary)' }}>Get answers to common questions about MeemDTT</p>
                        </div>
                    </div>
                    <div classNameName="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="accordion" id="faqAccordion">
                                <div className="accordion-item"
                                    style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', marginBottom: '15px', borderRadius: '10px' }}>
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#faq1"
                                            style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: 'none', borderRadius: '10px' }}>
                                            What makes MeemDTT different from other video conferencing tools?
                                        </button>
                                    </h2>
                                    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body" style={{ color: 'var(--text-secondary)' }}>
                                            MeemDTT is specifically designed for online learning with features like interactive
                                            whiteboards, presentation sharing, polling, and breakout rooms. It's open-source, which
                                            means complete customization and no vendor lock-in.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item"
                                    style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', marginBottom: '15px', borderRadius: '10px' }}>
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#faq2"
                                            style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: 'none', borderRadius: '10px' }}>
                                            Can I integrate MeemDTT with my Learning Management System?
                                        </button>
                                    </h2>
                                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body" style={{ color: 'var(--text-secondary)' }}>
                                            Yes! MeemDTT supports LTI (Learning Tools Interoperability) integration and can be
                                            integrated with popular LMS platforms like Moodle, Canvas, Blackboard, and more.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item"
                                    style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', marginBottom: '15px', borderRadius: '10px' }}>
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#faq3"
                                            style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: 'none', borderRadius: '10px' }}>
                                            What are the system requirements for hosting MeemDTT?
                                        </button>
                                    </h2>
                                    <div id="faq3" className="accordion-collapse colla</div>pse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body" style={{ color: 'var(--text-secondary)' }}>
                                            MeemDTT requires Ubuntu 20.04 or 22.04 LTS with minimum 8GB RAM and 4 CPU cores. For
                                            production use, we recommend 16GB RAM and scalable infrastructure based on concurrent
                                            users.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item"
                                    style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', marginBottom: '15px', borderRadius: '10px' }}>
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#faq4"
                                            style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: 'none', borderRadius: '10px' }}>
                                            Is MeemDTT secure for educational use?
                                        </button>
                                    </h2>
                                    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body" style={{ color: 'var(--text-secondary)' }}>
                                            Yes, MeemDTT uses WebRTC for encrypted audio/video transmission, supports waiting rooms,
                                            moderator controls, and can be deployed on your own infrastructure for complete data
                                            control.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Footer --> */}
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p>&copy; 2025 MeemDTT. All rights reserved. Built with ❤️ for better communication.</p>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default HomePage
