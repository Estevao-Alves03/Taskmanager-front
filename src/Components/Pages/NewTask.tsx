import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { MdAdd } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { Calendar } from "../../components/ui/calendar";
import { Button } from "../../components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

function Novatarefa() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [prioridade, setPrioridade] = useState("");
  const [categoria, setCategoria] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const navigate = useNavigate();

  const BackHome = () => navigate("/");

  const handleResetForm = () => {
    setDate(undefined);
    setPrioridade("");
    setCategoria("");
    setTitulo("");
    setDescricao("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!titulo) {
      alert("O título da tarefa é obrigatório!");
      return;
    }

    const newTask = {
      titulo,
      descricao,
      prioridade,
      categoria,
      vencimento: date?.toISOString() ?? null,
    };

    try {
      const response = await fetch("http://localhost:3000/tarefas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) throw new Error("Erro ao criar tarefa");
      
      handleResetForm();
      navigate("/");
    } catch (error) {
      console.error("Erro ao enviar a tarefa", error);
      alert("Ocorreu um erro ao criar a tarefa");
    }
  };

  return (
    <div className="mx-72 mb-20 p-4 mt-4">
      {/* Cabeçalho */}
      <div className="flex items-center gap-2 mb-2">
        <IoMdArrowBack
          onClick={BackHome}
          className="mr-2 text-2xl hover:cursor-pointer hover:text-emerald-600"
        />
        <h1 className="text-3xl font-bold">Nova Tarefa</h1>
      </div>
      <p className="text-lg text-gray-600 ml-10">
        Crie uma nova tarefa para sua lista
      </p>

      {/* Formulário */}
      <form
        onSubmit={handleSubmit}
        className="border border-zinc-300 p-4 mt-6 rounded-md"
      >
        <div className="flex items-center gap-2 ml-3 mt-3">
          <MdAdd className="mr-2 text-emerald-600 text-xl" />
          <h1 className="text-xl font-semibold">Detalhes da tarefa</h1>
        </div>

        {/* Campos do formulário */}
        <div className="mt-5 pl-0 p-2">
          <label className="text-base font-semibold mb-2 block">Título da Tarefa *</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Digite o título da tarefa..."
            className="px-6 py-2 rounded-sm border border-zinc-300 w-full placeholder:text-gray-500 focus:outline-none focus:border-emerald-600 transition-colors duration-300"
            required
          />
        </div>

        <div className="mt-5 pl-0 p-2">
          <label className="text-base font-semibold mb-2 block">Descrição</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descreva os detalhes da sua tarefa..."
            className="w-full min-h-[150px] px-6 py-3 rounded-sm border border-zinc-300 placeholder:text-gray-500 focus:outline-none focus:border-emerald-600 transition-colors duration-300"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mt-5 pl-0 p-2">
            <label className="text-base font-semibold mb-2 block">Prioridade</label>
            <select
              value={prioridade}
              onChange={(e) => setPrioridade(e.target.value)}
              className="w-full border bg-white border-zinc-300 rounded px-3 py-2"
            >
              <option value="">Selecione a prioridade</option>
              <option value="baixa">🟢 Baixa</option>
              <option value="media">🟡 Média</option>
              <option value="alta">🔴 Alta</option>
            </select>
          </div>

          <div className="mt-5 pl-0 p-2">
            <label className="text-base font-semibold mb-2 block">Categoria</label>
            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="w-full border bg-white border-zinc-300 rounded px-3 py-2"
            >
              <option value="">Selecione a categoria</option>
              <option value="trabalho">Trabalho</option>
              <option value="pessoal">Pessoal</option>
              <option value="estudos">Estudos</option>
              <option value="casa">Casa</option>
              <option value="saúde">Saúde</option>
            </select>
          </div>
        </div>

        {/* Seletor de data - Versão simplificada */}
        <div className="mt-5 pl-0 p-2">
          <label className="text-base font-semibold mb-2 block">Data do vencimento</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start border-zinc-300 flex items-center gap-2"
              >
                <SlCalender />
                {date ? format(date, "PPP", { locale: ptBR }) : "Selecione uma data"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                locale={ptBR}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Botões de ação */}
        <div className="mt-5 mb-5 pl-0 p-2 grid grid-cols-2 gap-4">
          <Button
            type="button"
            onClick={handleResetForm}
            variant="outline"
            className="text-lg p-6 font-bold"
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