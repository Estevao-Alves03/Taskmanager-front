import React from "react";
// rooks
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// react icons
import { IoMdArrowBack } from "react-icons/io";
import { MdAdd } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
// shadcd ui
import { Calendar } from "../../components/ui/calendar";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "../../components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";

function Novatarefa() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [prioridade, setPrioridade] = React.useState<string>('')
  const [categoria, setcategoria] = React.useState<string>('')


  const formRef = React.useRef<HTMLFormElement>(null)
  const navigate = useNavigate();

  const BackHome = () => {
    navigate("/");
  };

  const handleResetForm = () => {
    formRef.current?.reset()
    setDate(undefined)
    setPrioridade('')
    setcategoria('')
  }

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

      <form className="border border-zinc-300 p-4 mt-6 rounded-md">
        <div className="flex items-center gab-2 ml-3 mt-3">
          <MdAdd className="mr-2 text-emerald-600 text-xl" />
          <h1 className="text-xl font-semibold">Detalhes da tarefa</h1>
        </div>
        {/* escolhendo o titulo da mensagem */}
        <div className="mt-5 pl-0 p-2">
          <h1 className="text-base font-semibold mb-2">Titulo da Tarefa *</h1>
          <input
            type="text"
            name="title"
            placeholder="Digite o titulo da tarefa..."
            className="px-6 py-2 rounded-sm border border-zinc-300 w-full placeholder:text-gray-500 focus:outline-none transition-colors duration-300 focus:border-emerald-600"
          />
        </div>
        {/* escolhendo a descriçao da mensagem */}
        <div className="mt-5 pl-0 p-2">
          <h1 className="text-base font-semibold mb-2">Descriçao</h1>
          <textarea
            name="descricao"
            placeholder="Descreva os detalhes da sua tarefa..."
            className="w-full min-h-[150px] px-6 py-3 rounded-sm border border-zinc-300 placeholder:text-gray-500 focus:outline-none focus:border-emerald-600 transition-colors duration-300"
          />
        </div>
        {/* escolhendo o nivel de prioridade e categoria*/}
        <div className="grid grid-cols-2 gap-4">
          {/* prioridade */}
          <div className="mt-5 pl-0 p-2">
            <h1 className="text-base font-semibold mb-2">Prioridade</h1>
            <Select>
              <SelectTrigger className="w-full border-zinc-300 flex items-center gab-2">
                <SelectValue placeholder="Todas as tarefas" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="baixa">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    Baixa
                  </div>
                </SelectItem>
                <SelectItem value="media">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-500" />
                    Média
                  </div>
                </SelectItem>
                <SelectItem value="alta">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    Alta
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* categoria */}
          <div className="mt-5 pl-0 p-2">
            <h1 className="text-base font-semibold mb-2">Categoria</h1>
            <Select>
              <SelectTrigger className="w-full border-zinc-300 flex items-center gab-2 focus:">
                <SelectValue placeholder="Selecione a categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="trabalho">Trabalho</SelectItem>
                <SelectItem value="pessoal">Pessoal</SelectItem>
                <SelectItem value="estudos">Estudos</SelectItem>
                <SelectItem value="casa">Casa</SelectItem>
                <SelectItem value="saúde">Saúde</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* data do vencimento */}
        <div className="mt-5 pl-0 p-2">
          <h1 className="text-base font-semibold mb-2">Data do vencimento</h1>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant={"outline"} id="date" className="w-full justify-start border-zinc-300">
                <SlCalender/>
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
                onSelect={(date) => {
                  setDate(date);
                  setOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
        {/* botoes */}
        <div className="mt-5 mb-5 pl-0 p-2 grid grid-cols-2 gap-4 ">
              <Button 
              onClick={handleResetForm}
              className="bg-transparent hover:bg-zinc-200 text-gray-700 border border-zinc-300 text-lg p-6 font-bold">
                Cancelar
              </Button>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg p-6 font-bold">
                Criar Tarefa
              </Button>
        </div>
      </form>
    </div>
  );
}

export default Novatarefa;
