import commonApi from "./commonApi";
import base_url from "./base_url";



export const regUserApi = async (data) => {
    return await commonApi(`${base_url}/reg`, "POST", "", data)
}


export const logUserApi = async (data) => {
    return await commonApi(`${base_url}/login`, "POST", "", data)
}


export const addProjectApi = async (data) => {
    const header = {
        "Authorization": `Token ${sessionStorage.getItem('token')}`,
        "Content-Type": "multipart/form-data"
    }
    return await commonApi(`${base_url}/addProject`,"POST", header, data)
}


export const userProjectsApi = async () => {
    const header = {
        "Authorization": `Token ${sessionStorage.getItem('token')}`,
        "Content-Type": "application/json"
    }
    return await commonApi(`${base_url}/userProject`, "GET", header, "")
}


export const deleteProjectApi = async (id) => {
    const header = {
        "Authorization": `Token ${sessionStorage.getItem('token')}`,
        "Content-Type": "application/json"
    }
    return await commonApi(`${base_url}/deleteProject/${id}`, "DELETE", header, {})
}


export const editProjectApi=async(id,data,header)=>{
    return await commonApi(`${base_url}/editProject/${id}`,"PUT",header,data)
}

export const updateProfileApi=async(data,header)=>{
    return await commonApi(`${base_url}/updateprofile`,"PUT",header,data)
}

export const allProjectsApi=async()=>{
    return await commonApi(`${base_url}/allProjects`,"GET","","")
}



// export {regUserApi,logUserApi}

