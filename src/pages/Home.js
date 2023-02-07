import "../home.css";
import { useLoaderData } from "react-router-dom";
import Technology from "../components/Technology";
import { ContactUs } from "../components/Contact";

export default function Home(props) {
  const projects = useLoaderData();

  return (
    <section>
      
      <section className="home_body">
        <section className="heading">
          <h2>Hi, I'm Ramon Hernandez</h2>
        </section>
        <section className="profile">
          <img className="home_image" src="https://i.imgur.com/QVW2YTb.jpg" alt="Ramon in White Nike hat and blue pullover" />
        </section>
        <div className="icon-scroll"></div>
      </section>
      <section className="about">
        <img src="https://i.imgur.com/H9Xp25H.jpg" alt="Ramon swinging a golf club" />
        <section class="innerRect">
          <h3>About</h3>
          <p>
            I am a creative Front-End Developer with a passion for and 5 years
            of experience in technology and accessibility. My background in
            filmmaking, education, and computer science allows my creative and
            analytical traits to blend perfectly. I am adaptable to the
            technology I use. I am proficient in HTML, CSS (and Sass), and
            Javascript (REACT JS, Node JS, and React libraries and frameworks).
            I drive to develop websites that create a navigable experience. When
            approaching challenges, I devise well-thought-out plans, consult my
            team if needed, then follow up with a user-friendly end product.
            Currently, I am looking to develop websites that can continue to
            provide great user experiences.
          </p>
        </section>
      </section>
      <section className="skillsPage">
        <div className="topShadesContainer">
          <div className="shadeLine t-blue7"></div>
          <div className="shadeLine t-blue6"></div>
          <div className="shadeLine t-blue5"></div>
          <div className="shadeLine t-blue4"></div>
          <div className="shadeLine t-blue3"></div>
          <div className="shadeLine t-blue2"></div>
          <div className="shadeLine t-white"></div>
        </div>
        <article className="skillsContainer">
          <h3>Technical Skills</h3>
          <div className="skillCards">
            <div>
              <img
                className="html"
                src="https://i.imgur.com/4elB69O.png"
                alt=""
              />
              <h4>HTML</h4>
            </div>
            <div>
              <img
                className="css"
                src="https://i.imgur.com/CXnA9Ug.png"
                alt=""
              />
              <h4>CSS</h4>
            </div>
            <div>
              <img
                className="javascript"
                src="https://i.imgur.com/6scUcUd.png"
                alt=""
              />
              <h4>JavaScript</h4>
            </div>
            <div>
              <img
                className="react"
                src="https://i.imgur.com/azFNmgK.png"
                alt=""
              />
              <h4>React</h4>
            </div>
            <div>
              <img
                className="node"
                src="https://i.imgur.com/OWsGozd.png"
                alt=""
              />
              <h4>Node.js</h4>
            </div>
            <div>
              <img
                className="git"
                src="https://i.imgur.com/3f09g1V.png"
                alt=""
              />
              <h4>Git</h4>
            </div>
            <div>
              <img
                className="terminal"
                src="https://i.imgur.com/hniappf.png"
                alt=""
              />
              <h4>Terminal</h4>
            </div>
            <div>
              <img
                className="github"
                src="https://i.imgur.com/5FGlu1N.png"
                alt=""
              />
              <h4>GitHub</h4>
            </div>
            <div>
              <img
                className="figma"
                src="https://i.imgur.com/iXHboNr.png"
                alt=""
              />
              <h4>Figma</h4>
            </div>
            <div>
              <img
                className="tailwind"
                src="https://i.imgur.com/SLNL36j.png"
                alt=""
              />
              <h4>Tailwind CSS</h4>
            </div>
            <div>
              <img
                className="bootstrap"
                src="https://i.imgur.com/wtKmNZS.png"
                alt=""
              />
              <h4>Bootstrap</h4>
            </div>
            <div>
              <img
                className="materialUI"
                src="https://i.imgur.com/pNfwfro.png"
                alt=""
              />
              <h4>Material UI</h4>
            </div>
            <div>
              <img
                className="mongoDB"
                src="https://i.imgur.com/yZDIqeH.png"
                alt=""
              />
              <h4>MongoDB</h4>
            </div>
            <div>
              <img
                className="postgreSQL"
                src="https://i.imgur.com/edYh2Wb.png"
                alt=""
              />
              <h4>PostgreSQL</h4>
            </div>
            <div>
              <img
                className="creativeCloud"
                src="https://i.imgur.com/FbtibFp.png"
                alt=""
              />
              <h4>Adobe Creative Cloud</h4>
            </div>
            <div>
              <img
                className="photoshop"
                src="https://i.imgur.com/IIdu7oc.png"
                alt="photoshop icon"
              />
              <h4>Adobe Photoshop</h4>
            </div>
            <div>
              <img
                className="afterEffects"
                src="https://i.imgur.com/yVuYKcj.png"
                alt="after effects icon"
              />
              <h4>Adobe After Effects</h4>
            </div>
            <div>
              <img
                className="premiere"
                src="https://i.imgur.com/caHF36e.png"
                alt="premiere pro icon"
              />
              <h4>Adobe Premiere Pro</h4>
            </div>
          </div>
        </article>
        <div className="bottomShadesContainer">
          <div className="shadeLine b-white"></div>
          <div className="shadeLine b-blue2"></div>
          <div className="shadeLine b-blue3"></div>
          <div className="shadeLine b-blue4"></div>
          <div className="shadeLine b-blue5"></div>
          <div className="shadeLine b-blue6"></div>
          <div className="shadeLine b-blue7"></div>
        </div>
      </section>
      {/* <section className="projects">
        <section className="flex">
          <h3>Projects</h3>
          <section className="projIndex">
            {projects
              .map((project) => (
                <section className="projectDiv">
                  <a href={project.url} target="_blank" rel="noreferrer">
                    <img
                      className="siteCover"
                      src={project.image}
                      alt={project.name}
                    />
                  </a>
                  <div className="projectInfo">
                    <h4>{project.name}</h4>
                    <Technology project={project.technology} />
                    <p className="description">{project.description}</p>
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <img
                        className="ghBtn"
                        src="https://i.imgur.com/5FGlu1N.png"
                        alt=""
                      />
                    </a>
                  </div>
                </section>
              ))
              .reverse()}
          </section>
        </section>
      </section>
      <section className="contact">
        <ContactUs/>
      </section> */}
    </section>
  );
}
