import { create } from "zustand";

type TarjetaState = {
  tarjeta: string;
  nre: string;
  nombre: string;
  apellidos: string;
  grado: string;
  setTarjeta: (tarjeta: string) => void;
  procesarTarjeta: (data: string) => void;
};

export const useTarjetaStore = create<TarjetaState>((set) => ({
  tarjeta: "",
  nre: "",
  nombre: "",
  apellidos: "",
  grado: "",
  setTarjeta: (tarjeta) => set({ tarjeta }),
  procesarTarjeta: (data: string) => {
    // Inicializar un objeto con valores por defecto
    let nre = "", nombre = "", apellidos = "", grado = "", tarjeta = "";

    // Buscar e extraer los diferentes valores de la tarjeta
    const idIndex = data.indexOf('"id":');
    if (idIndex !== -1) {
      const idSubstring = data.substring(idIndex);
      tarjeta = idSubstring.substring(idSubstring.indexOf(":") + 2, idSubstring.indexOf(",") - 1);
    }

    // Extraer otros datos
    const nreIndex = data.indexOf('"nre":');
    if (nreIndex !== -1) {
      nre = data.substring(nreIndex + 6, data.indexOf(",", nreIndex)).trim().replace(/"/g, "");
    }

    const nombreIndex = data.indexOf('"nombre":');
    if (nombreIndex !== -1) {
      nombre = data.substring(nombreIndex + 9, data.indexOf(",", nombreIndex)).trim().replace(/"/g, "");
    }

    const apellidosIndex = data.indexOf('"apellidos":');
    if (apellidosIndex !== -1) {
      apellidos = data.substring(apellidosIndex + 12, data.indexOf(",", apellidosIndex)).trim().replace(/"/g, "");
    }

    const gradoIndex = data.indexOf('"grado":');
    if (gradoIndex !== -1) {
      grado = data.substring(gradoIndex + 8, data.indexOf(",", gradoIndex)).trim().replace(/"/g, "");
    }

    // Actualizar el estado con los datos procesados
    set({
      tarjeta,
      nre,
      nombre,
      apellidos,
      grado,
    });
  },
}));