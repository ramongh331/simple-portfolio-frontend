const URL = "https://ramon-portfolio-backend.herokuapp.com"

export const projectsLoader = async () => {
    const response = await fetch(URL + "/projects");
    const project = await response.json();
    return project
}
