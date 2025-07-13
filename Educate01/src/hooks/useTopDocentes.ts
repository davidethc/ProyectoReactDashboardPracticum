import { useState, useEffect } from "react";

import { getTopDocentesPorAnio } from "../services/docentesService";

interface TopDocente {
  docente: string;
  total: number;
}

export const useTopDocentes = (year: number) => {
  const [data, setData] = useState<TopDocente[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await getTopDocentesPorAnio(year);
        setData(response);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Error desconocido"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [year]);

  return { data, isLoading, error };
};
