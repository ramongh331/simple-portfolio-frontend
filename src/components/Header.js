import "../index.css"

export default function Header (props) {
    return (
        <section className="header">
            <section class="nav">
                <h2 className="logo">RHz</h2>
                <section className="nav-hyperlinks">
                    <h2>About</h2>
                    <h2>Projects</h2>
                    <h2>Contact</h2>
                </section>
            </section>
            <div className="underline"></div>
        </section>
    )
}