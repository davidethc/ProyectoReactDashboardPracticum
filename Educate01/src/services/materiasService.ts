import { API_BASE_URL, ENDPOINTS } from "./apiConfig";

interface AsignaturaData {
  asignatura: string;
  clases_unicas: number;
  total_clases: number; // Aseguramos que total_clases esté definido
}

interface AsignaturasResponse {
  message: string;
  data: {
    [year: string]: AsignaturaData[];
  };
}

export const getTopAsignaturasPorAnio = async (year?: number) => {
  try {
    const url = `${API_BASE_URL}${ENDPOINTS.TOP_MATERIAS_POR_ANIO}${
      year ? `?year=${year}` : ""
    }`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener las asignaturas por año");
    }

    const jsonData: AsignaturasResponse = await response.json();

    // Si se especificó un año, devolver solo los datos de ese año
    if (year && jsonData.data[year]) {
      return jsonData.data[year].map((item) => ({
        asignatura: item.asignatura,
        total: item.total_clases, // Aseguramos que total_clases esté definido
      }));
    }

    // Si no se especificó año, devolver el primer año disponible
    const firstYear = Object.keys(jsonData.data)[0];
    if (firstYear) {
      return jsonData.data[firstYear].map((item) => ({
        asignatura: item.asignatura,
        total: item.total_clases,
      }));
    }

    return [];
  } catch (error) {
    console.error("Error en getTopAsignaturasPorAnio:", error);
    throw error;
  }
};

// Exportamos la función directamente, sin usar export default
// para evitar confusiones en las importaciones
