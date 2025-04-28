import api from "../api/api";
import { ProjectRequest } from "../Models/Project";

const ProjectService = {
  getProjects: async (params: ProjectRequest) => {
    const response = await api.get("/Projects", { params });
    return response.data;
  },
  createProject: async (projectData: any) => {
    const response = await api.post("/Projects", projectData);
    return response.data;
  },
  updateProject: async (projectData: any) => {
    return await api.put(`/projects`, projectData); // No need to pass ID separately since it's in the body
  },
};

export default ProjectService;
