import { useState, useEffect } from "react";

import { getTopAsignaturasPorAnio } from "../services/materiasService";

interface TopMateria {
  asignatura: string;
  total: number;
}

export const useTopMaterias = (year: number) => {
  const [data, setData] = useState<TopMateria[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await getTopAsignaturasPorAnio(year);
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
