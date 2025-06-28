import { UserRound } from "lucide-react";
import { Bell } from "lucide-react";
import { Users } from "lucide-react";
import { Shield } from "lucide-react";
import { Palette } from "lucide-react";
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
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Switch } from "../../components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Select,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function SettingsPage() {

  const navigate = useNavigate()
 
  const handleBackHome = () => {
    navigate('/')
  }

  return (
    <div>
      {/* navbar */}
      <div className="border-b border-gray-300 px-16 py-8 flex items-center justify-between">
        <div className="">
        <div className="flex">
            <IoMdArrowBack
            onClick={handleBackHome}
            className="mt-1 mr-1 text-2xl hover:cursor-pointer hover:text-emerald-600"
            title="Voltar"
          />
          <h1 className="text-2xl font-extrabold text-gray-900">
            Configurações
          </h1>
        </div>
          <p className="ml-7 text-base text-gray-600 font-semibold font-sans">
            Gerencie suas preferências e configurações do sistema
          </p>
        </div>
        <button className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-900 font-semibold">
          salvar alterações
        </button>
      </div>

      {/* Conteudo da Pagina */}
      <div className="flex items-center justify-center mt-8">
        {/* links da pagina */}
        <Tabs defaultValue="account">
          <TabsList className="px-1 py-5">
            <TabsTrigger value="account" className="px-20 py-2">
              <UserRound className="w-5 h-4 pr-2" />
              Perfil
            </TabsTrigger>
            <TabsTrigger value="notifications" className="px-20 py-2">
              <Bell className="w-5 h-4 pr-2" />
              Notificações
            </TabsTrigger>
            <TabsTrigger value="team" className="px-20 py-2">
              <Users className="w-5 h-4 pr-2" />
              Equipe
            </TabsTrigger>
            <TabsTrigger value="security" className="px-20 py-2">
              <Shield className="w-5 h-4 pr-2" />
              Segurança
            </TabsTrigger>
            <TabsTrigger value="appearance" className="px-20 py-2">
              <Palette className="w-5 h-4 pr-2" />
              Aparência
            </TabsTrigger>
          </TabsList>

          {/* pagina do perfil */}
          <TabsContent value="account">
            <Card className="border-2 border-gray-300 mt-8 mb-12">
              <CardHeader>
                <CardTitle className="text-xl font-extrabold">
                  Informações Pessoais
                </CardTitle>
                <CardDescription>
                  Atualize suas informações de perfil
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 ">
                  {/* "imagem" */}
                  <div className="w-24 h-24 rounded-full bg-gray-200 border-gray-300 border" />
                  {/* botao e mansagem informativa */}
                  <div className="flex flex-col gap-1">
                    <button className="border px-3 py-2 rounded text-sm hover:bg-gray-100 w-fit">
                      {" "}
                      alterar foto{" "}
                    </button>
                    <p className="text-xs text-gray-600 font-sans mb-6">
                      JPG, GIF ou PNG. Máximo 1MB.
                    </p>
                  </div>
                </div>
                {/* formulario */}
                <div>
                  <form>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="gap-2">
                        <Label className="text-sm font-semibold text-gray-700">
                          Nome
                        </Label>
                        <Input
                          type="text"
                          name="name"
                          className="rounded-md border-gray-300"
                        />
                      </div>
                      <div className="gap-2">
                        <Label className="text-sm font-semibold text-gray-700">
                          Sobrenome
                        </Label>
                        <Input
                          type="text"
                          name="lastname"
                          className="border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="mt-6">
                      <Label className="text-sm font-semibold text-gray-700">
                        Email
                      </Label>
                      <Input
                        type="email"
                        name="email"
                        className="border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mt-6">
                      <Label className="text-sm font-semibold text-gray-700">
                        Biografia
                      </Label>
                      <Textarea
                        typeof="text"
                        name="biography"
                        placeholder="Conte um pouco sobre você..."
                        className="border-gray-300 rounded-md placeholde:text-sm placeholder:font-sans pb-10"
                      />
                    </div>
                  </form>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* pagina das notificaçoe */}
          <TabsContent value="notifications">
            <Card className="border-2 border-gray-300 mt-8 mb-12">
              <CardHeader>
                <CardTitle className="text-xl font-extrabold">
                  Preferências de Notificação
                </CardTitle>
                <CardDescription>
                  Configure como você deseja receber notificações
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-semibold font-sans text-sm">
                      Notificações por Email
                    </Label>
                    <p className="text-sm text-gray-500 font-serif">
                      Receba atualizações por email
                    </p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-semibold font-sans text-sm">
                      Notificações Push
                    </Label>
                    <p className="text-sm text-gray-500 font-serif">
                      Receba notificações no navegador
                    </p>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div className="space-y-4">
                  <Label className="text-lg font-semibold font-sans">
                    Tipos de Notificação
                  </Label>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-serif">
                        Novas tarefas atribuidas
                      </span>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-serif">
                        Prazos proximos
                      </span>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-serif">
                        Comentários em tarefas
                      </span>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-serif">
                        Atualizações de projeto
                      </span>
                      <Switch />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* pagina de segurança */}
          <TabsContent value="security">
            <Card className="border-2 border-gray-300 mt-8 mb-12">
              <CardHeader>
                <CardTitle className="text-xl font-extrabold">
                  Segurança da Conta
                </CardTitle>
                <CardDescription>Mantenha sua conta segura</CardDescription>
              </CardHeader>
              <CardContent className="mt-3">
                <form>
                  <div className="space-y-6">
                    <div>
                      <Label className="text-sm font-semibold">
                        Senha Atual
                      </Label>
                      <Input
                        className=" border-gray-300 focus:border-gray-600"
                        type="password"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-semibold">
                        Nova Senha
                      </Label>
                      <Input
                        className=" border-gray-300 focus:border-gray-600"
                        type="password"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-semibold">
                        Confirmar Nova Senha
                      </Label>
                      <Input
                        className=" border-gray-300 focus:border-gray-600"
                        type="password"
                      />
                    </div>
                  </div>
                  <Button className="mt-6 mb-4 font-bold">Alterar Senha</Button>
                </form>
                <Separator />
                <div className="mt-4">
                  <Label className="text-medium font-bold">
                    Autenticaçao de dois fatores
                  </Label>
                  <div className="flex items-center justify-between">
                    <div className="mt-4">
                      <span className="text-sm font-semibold">Ativar 2FA</span>
                      <p className="text-xs text-gray-600 font-sans">
                        Adicione uma camada extra de segurança
                      </p>
                    </div>
                    <Button className="bg-white text-black border-2 hover:bg-gray-100">
                      Configurar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team">
            <Card className="border-2 border-gray-300 mt-8 mb-12">
              <CardHeader>
                <CardTitle className="text-xl font-extrabold">
                  Gerenciamento de Equipe
                </CardTitle>
                <CardDescription>
                  Configure permissões e convide membros
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* perfil de exemplo */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-2 p-4 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Avatar className="border-2 ">
                        <AvatarFallback>MS</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Maria Santos</p>
                        <p className="text-sm text-gray-500 font-sans">
                          maria@empresa.com
                        </p>
                      </div>
                    </div>
                    <Select defaultValue="admin">
                      <SelectTrigger className="w-52">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="membro">Membro</SelectItem>
                        <SelectItem value="vizualizador">
                          Vizualizador
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between border-2 p-4 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Avatar className="border-2">
                        <AvatarFallback>JM</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Joao Magalhaes</p>
                        <p className="text-sm text-gray-500 font-sans">
                          joao@empresa.com
                        </p>
                      </div>
                    </div>
                    <Select defaultValue="admin">
                      <SelectTrigger className="w-52">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="membro">Membro</SelectItem>
                        <SelectItem value="vizualizador">
                          Vizualizador
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* enviar convite a novo membro */}
                <Separator />
                <div className="mt-3">
                  <Label className="text-sm font-bold font-sans">
                    Convidar Novo Membro
                  </Label>
                  <div className="flex items-center justify-between mt-3">
                    <Input
                      placeholder="email@exemplo.com"
                      className="mr-3 border-2"
                    />
                    <Button>Enviar Convite</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appearance">
            <Card className="border-2 border-gray-300 mt-8 mb-12">
              <CardHeader>
                <CardTitle className="text-xl font-extrabold">
                  Personalização
                </CardTitle>
                <CardDescription>
                  Customize a aparência do sistema
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold">Modo escuro</span>
                    <p className="text-sm text-gray-600 font-sans">
                      Ativar tema escuro
                    </p>
                  </div>
                  <Switch />
                </div>
                <div className="space-y-6 mt-5">
                  <div>
                    <Label className="text-sm font-semibold">Idioma</Label>
                    <Select defaultValue="pt-br">
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pt-br">
                          Portugues (Brasil)
                        </SelectItem>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Español</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm font-semibold">
                      Fuso Horário
                    </Label>
                    <Select defaultValue="america-sao-paulo">
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="america-sao-paulo">
                          América/São Paulo
                        </SelectItem>
                        <SelectItem value="america-new-york">
                          América/New York
                        </SelectItem>
                        <SelectItem value="europa-londres">
                          Europa/Londres
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default SettingsPage;
