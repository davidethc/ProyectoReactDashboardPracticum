import { useState, useEffect } from "react";

import materiasService from "../services/materiasService";

// Change this line to use default import

interface Materia {
  nombre_asignatura: string;
  total: number;
}

interface TopMateriasHookResult {
  materias: Materia[];
  error: string | null;
  loading: boolean;
}

export const useTopMaterias = (): TopMateriasHookResult => {
  const [materias, setMaterias] = useState<Materia[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await materiasService.getTopMaterias();
        setMaterias(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { materias, error, loading };
};
