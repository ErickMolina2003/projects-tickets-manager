import axios from 'axios';

export async function getProject(id: string) {
  try {
    const project = await axios({
      method: 'get',
      url: `http://127.0.0.1:8000/api/projects/${id}`,
      responseType: 'json',
    });
    return project.data;
  } catch (e) {
    return e;
  }
}

export async function createProject(newProject: any) {
  try {
    const project = await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/projects/',
      data: newProject,
    });
    return project.data;
  } catch (e) {
    return e;
  }
}

export async function attachProjectUser(project_user_id: any) {
  try {
    const project = await axios({
      method: 'post', 
      url: 'http://127.0.0.1:8000/api/clients/project/',
      data: project_user_id,
    });
    return project.data;
  } catch (e) {
    return e;
  }
}
