import { create } from "zustand";

type TarjetaState = {
  tarjeta: string;
  setTarjeta: (tarjeta: string) => void;
  procesarTarjeta: (data: string) => void;
};

export const useTarjetaStore = create<TarjetaState>((set) => ({
  tarjeta: "",
  setTarjeta: (tarjeta) => set({ tarjeta }),
  procesarTarjeta: (data: string) => {
    const idIndex = data.indexOf('"id":');
    if (idIndex !== -1){
      const idSubstring = data.substring(idIndex);
      set ({ tarjeta: idSubstring });
    } else {
      set({tarjeta: ""})
    }
  }
}));