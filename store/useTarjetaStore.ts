import { create } from "zustand";

type TarjetaState = {
  tarjeta: string;
  setTarjeta: (tarjeta: string) => void;
};

export const useTarjetaStore = create<TarjetaState>((set) => ({
  tarjeta: "",
  setTarjeta: (tarjeta) => set({ tarjeta }),
}));