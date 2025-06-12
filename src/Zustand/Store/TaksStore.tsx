import {create} from 'zustand'

type TarefasStore = {
    total: number;
    concluidas: number;
    setTotal: (valor: number) => void;
    setConcluidas: (valor: number)=> void;
};

export const useTasksStore = create<TarefasStore>((set) => ({
    total:5,
    concluidas:2,
    setTotal:(valor) => set({total: valor}),
    setConcluidas:(valor) => set({concluidas: valor}),
}))