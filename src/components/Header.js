import "../header.css"

export default function Header (props) {
    return (
        <section className="header">
            <section class="nav">
                <a href="#home">
                    <h2 className="logo">RHz</h2>
                </a>
                <section className="nav-hyperlinks">
                    <a href="https://docs.google.com/document/d/1wiw12XV2FYtoqgWUFv-xZNhvhHL64YuPXFUGZoH5kQk/edit?usp=sharing" target="_blank" rel="noreferrer">
                        <h2>Resumè</h2>
                    </a>
                    <a href="#about">
                        <h2>About</h2>
                    </a>
                    <a href="#skills">
                        <h2>Skills</h2>
                    </a>
                    <a href="#projects">
                        <h2>Projects</h2>
                    </a>
                    <a href="#contact">
                        <h2>Contact</h2>
                    </a>
                </section>
            </section>
            <div className="underline"></div>
        </section>
    )
}