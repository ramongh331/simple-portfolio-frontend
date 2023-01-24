import { useLoaderData } from "react-router-dom"

export default function Show (props) {
    
    const project = useLoaderData()
    const imgWidth = {
        width: "50rem"
    }
    return (
        <div>
            <h2>{project.name}</h2>
            <img src={project.image} alt="cover for website" style={imgWidth}/>
        </div>
    )
}