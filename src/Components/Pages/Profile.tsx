import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CiCircleCheck } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { PiSpiralDuotone } from "react-icons/pi";
import { TiFlash } from "react-icons/ti";
import { CiSettings } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";

function Profile() {
  return (
    <div>
      {/* parte superior */}
      <div className="border border-gray-300 mt-7 mx-24 p-5 rounded-lg mb-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="border-2 flex items-center justify-center w-24 h-24">
              <AvatarFallback className="text-2xl">EA</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-2xl">Estevão Alves</p>
              <p className="text-sm text-gray-500 font-sans">
                alves@programador.com
              </p>
              <div className="flex items-center justify-center mt-2 mr-3">
                <p className="text-xs text-black font-sans border-2 rounded-lg px-1">
                  Membro desde Jan 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* area de progresso */}
      <div className="grid grid-cols-4 gap-4 mx-24">
        <div className="border border-gray-300 rounded-lg p-7 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <CiCircleCheck className="w-8 h-8 bg-green-200 text-green-500 rounded-sm " />
            <div>
              <p className="text-green-500 font-extrabold text-xl">127</p>
              <p>Tarefas concluidas</p>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 rounded-lg p-7 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <CiClock2 className="w-8 h-8 bg-orange-200 text-orange-500 rounded-sm " />
            <div>
              <p className="text-orange-500 text-xl font-extrabold">23</p>
              <p>Em andamento</p>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 rounded-lg p-7 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <PiSpiralDuotone className="w-8 h-8 bg-blue-200 text-blue-500 rounded-sm" />
            <div>
              <p className="text-blue-500 font-extrabold text-xl">8</p>
              <p>Projetos ativos</p>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 rounded-lg p-7 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <TiFlash className="w-8 h-8 bg-purple-200 text-purple-500 rounded-sm" />
            <div>
              <p className="text-xl font-extrabold text-purple-500">92%</p>
              <p>Taxa de conclusao</p>
            </div>
          </div>
        </div>
      </div>

      {/* links para navegaçao */}
      <div className="mx-80 flex items-center justify-center mt-7">
        <Tabs defaultValue="overview">
          <TabsList className="px-1 py-5">
            <TabsTrigger value="overview" className="px-28 py-2">
              Visao geral
            </TabsTrigger>
            <TabsTrigger value="activity" className="px-28 py-2">
              Atividade
            </TabsTrigger>
            <TabsTrigger value="quick-settings" className="px-28 py-2">
              Configuraçoes
            </TabsTrigger>
            <TabsTrigger value="profile" className="px-28 py-2">
              Perfil
            </TabsTrigger>
          </TabsList>

          {/* visao geral */}
          <TabsContent value="overview" className="grid grid-cols-2 gap-5 mt-7">
            <Card className="border-2 border-gray-300 rounded-lg mb-7">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Progresso desta Semana
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 font-sans">
                  Você completou 18 de 25 tarefas planejadas
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-2">
                      <span>Progresso</span>
                      <p>100%</p>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-2 bg-emerald-600 rounded-full transition-all"
                        style={{}}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mr-48 mt-7 mb-40">
                    <div>
                      <h1 className="font-bold text-sm text-black">
                        Meta Diaria
                      </h1>
                      <p className="text-gray-700 text-sm font-semibold">
                        5 Tarefas
                      </p>
                    </div>
                    <div>
                      <h1 className="font-bold text-sm text-black">
                        Media atual
                      </h1>
                      <p className="text-gray-700 text-sm font-semibold">
                        4.2 Tarefas
                      </p>
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-300 rounded-lg mb-7">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Projetos Recentes
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 font-sans">
                  Seus projetos mais ativos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between bg-gray-100 w-full p-2 rounded-md">
                  <div>
                    <div>
                      <span className="text-sm font-bold text-black">
                        Redesign do Website
                      </span>
                      <p className="text-gray-700 text-sm font-semibold">
                        12 tarefas restantes
                      </p>
                    </div>
                  </div>
                  <p className="text-sm border rounded-lg px-3 bg-gray-300 font-bold">
                    Em Andamento
                  </p>
                </div>
                <div className="flex items-center justify-between bg-gray-100 w-full p-2 rounded-md">
                  <div>
                    <div>
                      <span className="text-sm font-bold text-black">
                        App Mobile
                      </span>
                      <p className="text-gray-700 text-sm font-semibold">
                        8 tarefas restantes
                      </p>
                    </div>
                  </div>
                  <p className="text-sm border rounded-lg px-3 bg-gray-300 font-bold">
                    Em Andamento
                  </p>
                </div>
                <div className="flex items-center justify-between bg-gray-100 w-full p-2 rounded-md">
                  <div>
                    <div>
                      <span className="text-sm font-bold text-black">
                        Campanha Marketing
                      </span>
                      <p className="text-gray-700 text-sm font-semibold">
                        Concluido
                      </p>
                    </div>
                  </div>
                  <p className="text-sm border rounded-lg px-3 bg-green-200 text-green-600 font-bold">
                    finalizado
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* atividade */}
          <TabsContent value="activity">
            <Card className="border-2 border-gray-300 rounded-lg mb-7">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Atividade Recente
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 font-sans">
                  Suas últimas ações no sistema
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CiCircleCheck className="w-6 h-6 bg-green-200 text-green-500 rounded-sm flex flex-col self-start" />
                    <div>
                      <h1 className="text-base font-bold">Tarefa concluida</h1>
                      <span className="text-sm text-gray-600">
                        Finalizar apresentaçao do projeto
                      </span>
                      <p className="text-xs text-gray-600">Há 2 horas</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CiClock2 className="w-6 h-6 bg-orange-200 text-orange-500 rounded-sm flex flex-col self-start" />
                    <div>
                      <h1 className="text-base font-bold">
                        Nova tarefa concluida
                      </h1>
                      <span className="text-sm text-gray-600">
                        Revisar documentação técnica
                      </span>
                      <p className="text-xs text-gray-600">Há 4 horas</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <PiSpiralDuotone className="w-6 h-6 bg-blue-200 text-blue-500 rounded-sm flex flex-col self-start" />
                    <div>
                      <h1 className="text-base font-bold">
                        Projeto atualizado
                      </h1>
                      <span className="text-sm text-gray-600">
                        Redesign do Website - Nova milestone
                      </span>
                      <p className="text-xs text-gray-600">Ontem</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* configuraçoes simples */}
          <TabsContent value="quick-settings">
            <Card className="border-2 border-gray-300 rounded-lg mb-7">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center">
                  <CiSettings className="w-5 h-5 mr-1" />
                  Configurações Rápidas
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 font-sans">
                  Personalize sua experiência no app
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-base font-bold">Notificaçoes</span>
                    <p className="text-sm text-gray-600 font-sans">
                      Receber notificações sobre tarefas e prazos
                    </p>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-base font-bold">Modo escuro</span>
                    <p className="text-sm text-gray-600 font-sans">
                      Alternar entre tema claro e escuro
                    </p>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div className="mt-4 space-y-2">
                  <Label className="text-base font-">Fuso Horário</Label>
                  <Select defaultValue="america-sao-paulo">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="america-sao-paulo">
                        America/Sao Paulo
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="mt-4 space-y-2">
                  <Label className="text-base font-">Idioma</Label>
                  <Select defaultValue="pt-br">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pt-br">Portugues (Brasil)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* perfil */}
          <TabsContent value="profile">
            <Card className="border-2 border-gray-300 rounded-lg mb-7">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center">
                  <FaRegUser className=" w-4 h-4 mr-2" />
                  Informações do Perfil
                </CardTitle>
                <CardDescription>
                  Atualize suas informações pessoais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="">
                      <Label>Nome</Label>
                      <Input
                        className="border-2 border-gray-300"
                        type="text"
                        name="name"
                      />
                    </div>
                    <div>
                      <Label>Sobrenome</Label>
                      <Input
                        className="border-2 border-gray-300"
                        type="text"
                        name="lastname"
                      />
                    </div>
                    <div>
                      <Label>Email</Label>
                      <Input
                        placeholder="email@exemplo.com"
                        className="border-2 border-gray-300"
                        type="email"
                        name="email"
                      />
                    </div>
                    <div>
                      <Label>Telefone</Label>
                      <Input
                        placeholder="(99) 99999-9999"
                        className="border-2 border-gray-300"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <Label>Biografia</Label>
                    <Textarea className="border-2 border-gray-300" />
                  </div>
                </form>
                <div className="grid grid-cols-7 gap-4 mt-7">
                  <Button>Salvar alterações</Button>
                  <Button className="bg-white text-black hover:bg-gray-200 border-2">
                    Cancelar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Profile;
