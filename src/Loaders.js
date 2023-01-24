const URL = "https://portfolio-api-cnfr.onrender.com"

export const projectsLoader = async () => {
    const response = await fetch(URL + "/projects");
    const project = await response.json();
    return project
}