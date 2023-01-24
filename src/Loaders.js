const URL = "https://portfolio-api-cnfr.onrender.com"

export const projectsLoader = async () => {
    const response = await fetch(URL + "/projects");
    const project = await response.json();
    return project
}
export const projectLoader = async ({params}) => {
    const response = await fetch(URL + "/projects/" + params.id);
    const project = await response.json();
    return project
}