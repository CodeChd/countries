import apiClient from "../config/api.ts"

const controller = new AbortController();
const all = async () => {
    const response = await apiClient.get("all", {
        signal: controller.signal,
    })
    if (response.status !== 200) {
        throw new Error("Resource not found!");
    }
    return response.data

}

const getByName = async (name: string) => {
    const response = await apiClient.get(`name/${name}`, {
        signal: controller.signal,
    })

    if (response.status !== 200) {
        throw new Error("Resource not found!");
    }

    return response.data

}

const getByRegion = async (name: string) => {
    const response = await apiClient.get(`region/${name}`, {
        signal: controller.signal,
    })

    if (response.status !== 200) {
        throw new Error("Resource not found!");
    }

    return response.data

}

const getByCode = async (name: string) => {
    const response = await apiClient.get(`alpha/${name}`, {
        signal: controller.signal,
    })

    if (response.status !== 200) {
        throw new Error("Resource not found!");
    }

    return response.data

}


export const api ={
    all,
    getByName,
    getByRegion,
    getByCode
}

export default api

