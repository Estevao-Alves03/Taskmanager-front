import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { MdAdd } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { Calendar } from "../../components/ui/calendar";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
  SelectGroup,
} from "../../components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";

function Novatarefa() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [prioridade, setPrioridade] = useState<string>("");
  const [categoria, setCategoria] = useState<string>("");
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const BackHome = () => {
    navigate("/");
  };

  const handleResetForm = () => {
    setDate(undefined);
    setPrioridade("");
    setCategoria("");
    setTitulo("");
    setDescricao("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newTask = {
      titulo,
      descricao,
      prioridade,
      categoria,
      vencimento: date?.toISOString() ?? null,
    };

    try {
      await fetch("http://localhost:3000/tarefas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });

      handleResetForm();
      navigate("/");
    } catch (error) {
      console.error("Erro ao enviar a tarefa", error);
    }
  };
  

  return (
    <div className="mx-72 mb-20 p-4 mt-4">
      <div className="flex items-center gap-2 mb-2">
        <IoMdArrowBack
          onClick={BackHome}
          className="mr-2 text-2xl hover:cursor-pointer hover:text-emerald-600"
        />
        <h1 className="text-3xl font-bold ">Nova Tarefa</h1>
      </div>
      <p className="text-lg text-gray-600 ml-10">
        Crie uma nova tarefa para sua lista
      </p>

      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="border border-zinc-300 p-4 mt-6 rounded-md"
      >
        <div className="flex items-center gap-2 ml-3 mt-3">
          <MdAdd className="mr-2 text-emerald-600 text-xl" />
          <h1 className="text-xl font-semibold">Detalhes da tarefa</h1>
        </div>
        {/* Título da tarefa */}
        <div className="mt-5 pl-0 p-2">
          <h1 className="text-base font-semibold mb-2">Titulo da Tarefa *</h1>
          <input
            type="text"
            name="title"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Digite o titulo da tarefa..."
            className="px-6 py-2 rounded-sm border border-zinc-300 w-full placeholder:text-gray-500 focus:outline-none transition-colors duration-300 focus:border-emerald-600"
          />
        </div>
        {/* Descrição */}
        <div className="mt-5 pl-0 p-2">
          <h1 className="text-base font-semibold mb-2">Descrição</h1>
          <textarea
            name="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descreva os detalhes da sua tarefa..."
            className="w-full min-h-[150px] px-6 py-3 rounded-sm border border-zinc-300 placeholder:text-gray-500 focus:outline-none focus:border-emerald-600 transition-colors duration-300"
          />
        </div>
        {/* Prioridade e Categoria */}
        <div className="grid grid-cols-2 gap-4">
          <div className="mt-5 pl-0 p-2">
            <h1 className="text-base font-semibold mb-2">Prioridade</h1>
            <select
              value={prioridade}
              onChange={(e) => setPrioridade(e.target.value)}
              className="w-full border border-zinc-300 rounded px-3 py-2 flex items-center gap-2"
            >
              <option value="" disabled>
                Selecione o nivel de prioridade
              </option>
              <option value="baixa">🟢 Baixa</option>
              <option value="media">🟡 Média</option>
              <option value="alta">🔴 Alta</option>
            </select>
          </div>

          <div className="mt-5 pl-0 p-2">
            <h1 className="text-base font-semibold mb-2">Categoria</h1>
            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="w-full border border-zinc-300 rounded px-3 py-2"
            >
              <option value="" disabled>
                Selecione a categoria
              </option>
              <option value="trabalho">Trabalho</option>
              <option value="pessoal">Pessoal</option>
              <option value="estudos">Estudos</option>
              <option value="casa">Casa</option>
              <option value="saúde">Saúde</option>
            </select>
          </div>
        </div>

        {/* Data do vencimento */}
        <div className="mt-5 pl-0 p-2">
          <h1 className="text-base font-semibold mb-2">Data do vencimento</h1>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                id="date"
                className="w-full justify-start border-zinc-300 flex items-center gap-2"
              >
                <SlCalender />
                {date ? date.toLocaleDateString() : "Selecione uma data"}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="start"
            >
              <Calendar
                mode="single"
                selected={date}
                captionLayout="dropdown"
                onSelect={(selected) => {
                  if (Array.isArray(selected)) {
                    setDate(selected[0]);
                  } else {
                    setDate(selected);
                  }
                  setOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Botões */}
        <div className="mt-5 mb-5 pl-0 p-2 grid grid-cols-2 gap-4">
          <Button
            onClick={handleResetForm}
            className="bg-transparent hover:bg-zinc-200 text-gray-700 border border-zinc-300 text-lg p-6 font-bold"
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg p-6 font-bold"
          >
            Criar Tarefa
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Novatarefa;
