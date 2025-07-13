import { API_BASE_URL, ENDPOINTS } from "./apiConfig";

export interface Emocion {
  anio: number;
  feliz: number;
  interesado: number;
  motivado: number;
  entusiasmado: number;
  preocupado: number;
  temeroso: number;
  triste: number;
  cansado: number;
  positivas: number;
  negativas: number;
}

interface EmocionesResponse {
  emociones_por_anio: Emocion[];
}

export const getEmocionesPorAnio = async () => {
  try {
    const url = `${API_BASE_URL}${ENDPOINTS.EMOCIONES_POR_ANIO}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error al obtener las emociones por año");
    }

    const jsonData: EmocionesResponse = await response.json();
    return jsonData.emociones_por_anio;
  } catch (error) {
    console.error("Error en getEmocionesPorAnio:", error);
    throw error;
  }
};
