import { useState, useEffect } from "react";

import { getEmocionesPorAnio } from "../services/emocionesService";
import type { Emocion } from "../services/emocionesService";

export const useEmociones = () => {
  const [data, setData] = useState<Emocion[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const emociones = await getEmocionesPorAnio();
        setData(emociones);
        setError(null);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};
