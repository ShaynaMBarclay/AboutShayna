function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Shayna's Portfolio. All Rights Reserved.</p>
                <ul className="footer-links">
                    <li><a href="/about-me">About Me</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/projects">Projects</a></li>
                </ul>
                <div className="footer-social">
                    <a href="https://github.com/ShaynaMBarclay" rel="GitHub">GitHub</a>
                    <a href="https://www.linkedin.com/in/shaynambarclay/" rel="LinkedIn">LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;