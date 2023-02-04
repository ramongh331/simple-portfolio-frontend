import "../index.css"

export default function Technology ({project}) {

const techArr = project

    return (
        <section className="techContainer">
             {techArr.map((tech) => (
                <div>{tech}</div>
            ))}
        </section>
    )
}