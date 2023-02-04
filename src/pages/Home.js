import "../home.css";
import Photo from "../images/ProfilePhoto.png"
import golfSwing from "../images/RamonSwing.jpeg"
import ProjectsBG from "../images/AbstractBG.jpeg"
import { useLoaderData } from "react-router-dom";
import Technology from "../components/Technology";

export default function Home(props) {
const projects = useLoaderData()

  return (
    <section>
        <section className="home-body">
          <section className="heading">
            <h2>Hi, I'm Ramon Hernandez</h2>
          </section>
          <section className="profile">
            <div className="topCircle"></div>
            <div className="bottomCircle"></div>
            <img src={Photo} alt="Ramon in White Nike hat and blue pullover"/>
          </section>
        </section>
        <section className="about">
        <img src={golfSwing} alt="Ramon swinging a golf club"/>
        <section class="innerRect">
            <h3>About</h3>
            <p>I am a creative Front-End Developer with a passion for and 5 years of experience in technology and accessibility. My background in filmmaking, education, and computer science allows my creative and analytical traits to blend perfectly. I am adaptable to the technology I use. I am proficient in HTML, CSS (and Sass), and Javascript (REACT JS, Node JS, and React libraries and frameworks). I drive to develop websites that create a navigable experience. When approaching challenges, I devise well-thought-out plans, consult my team if needed, then follow up with a user-friendly end product. Currently, I am looking to develop websites that can continue to provide great user experiences.</p>
        </section>
          </section>
          <section className="projects">
            <img src={ProjectsBG} alt="abstract design for background"/>
            <section className="flex">
                <h3>Projects</h3>
                <section className="projIndex">
                  {projects.map((project) => (
                    <section className="">
                      <img src={project.image} alt={project.name}/>
                      <h4>{project.name}</h4>
                      <Technology project={project.technology}/>
                    </section>
                    
                  ))}
                    
                </section>
            </section>
          </section>
    </section>
  );
}
