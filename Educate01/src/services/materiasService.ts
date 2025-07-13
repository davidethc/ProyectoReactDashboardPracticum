import { API_BASE_URL, ENDPOINTS } from "./apiConfig";

export const getTopMaterias = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}${ENDPOINTS.TOP_MATERIAS}`);
    if (!response.ok) {
      throw new Error("Error al obtener las materias");
    }
    return await response.json();
  } catch (error) {
    console.error("Error en getTopMaterias:", error);
    throw error;
  }
};

export default { getTopMaterias };
