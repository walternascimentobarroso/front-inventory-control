import axios from "axios";

const ROUTE = "http://localhost";

// Função para fazer requisição GET
export const get = async (url: string) => {
  try {
    const response = await axios.get(`${ROUTE}/${url}`);
    return response.data;
  } catch (error: any) {
    throw new Error(`Erro na requisição GET: ${error.message}`);
  }
};

// Função para fazer requisição POST
export const post = async (url: string, data: object) => {
  try {
    const response = await axios.post(`${ROUTE}/${url}`, data);
    return response.data;
  } catch (error: any) {
    throw new Error(`Erro na requisição POST: ${error.message}`);
  }
};

// Função para fazer requisição PUT
export const put = async (url: string, data: object) => {
  try {
    const response = await axios.put(`${ROUTE}/${url}`, data);
    return response.data;
  } catch (error: any) {
    throw new Error(`Erro na requisição PUT: ${error.message}`);
  }
};

// Função para fazer requisição DELETE
export const remove = async (url: string) => {
  try {
    const response = await axios.delete(`${ROUTE}/${url}`);
    return response.data;
  } catch (error: any) {
    throw new Error(`Erro na requisição DELETE: ${error.message}`);
  }
};
