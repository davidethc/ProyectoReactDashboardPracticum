import { API_BASE_URL, ENDPOINTS } from "./apiConfig";

// Interfaces exportadas para usar en componentes
export interface TopDocente {
  docente: string;
  total: number;
}
interface DocenteData {
  docente: string;
  clases_unicas: number;
}

interface DocentesResponse {
  message: string;
  data: {
    [year: string]: DocenteData[];
  };
}

export const getTopDocentesPorAnio = async (year?: number) => {
  try {
    const url = `${API_BASE_URL}${ENDPOINTS.TOP_DOCENTES_POR_ANIO}${
      year ? `?year=${year}` : ""
    }`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener los docentes por año");
    }

    const jsonData: DocentesResponse = await response.json();

    // Si se especificó un año, devolver solo los datos de ese año
    if (year && jsonData.data[year]) {
      return jsonData.data[year].map((item) => ({
        docente: item.docente,
        total: item.clases_unicas,
      }));
    }

    // Si no se especificó año, devolver el primer año disponible
    const firstYear = Object.keys(jsonData.data)[0];
    if (firstYear) {
      return jsonData.data[firstYear].map((item) => ({
        docente: item.docente,
        total: item.clases_unicas,
      }));
    }

    return [];
  } catch (error) {
    console.error("Error en getTopDocentesPorAnio:", error);
    throw error;
  }
};
