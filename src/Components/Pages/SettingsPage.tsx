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


function SettingsPage() {
  return (
    <div>
      {/* navbar */}
      <div className="border-b border-gray-300 px-32 py-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">
            Configurações
          </h1>
          <p className="text-base text-gray-600 font-semibold font-sans">
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
          <TabsContent value="account" className="">
            <Card className="border-2 border-gray-300 mt-8 mb-12">
              <CardHeader>
                <CardTitle>Informações Pessoais</CardTitle>
                <CardDescription>
                  Atualize suas informações de perfil
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 ">
                    {/* "imagem" */}
                  <div className="w-24 h-24 rounded-full bg-gray-200 border-gray-300 border"/>
                    {/* botao e mansagem informativa */}
                  <div className="flex flex-col gap-1">
                    <button className="border px-3 py-2 rounded text-sm hover:bg-gray-100 w-fit"> alterar foto </button>
                    <p className="text-xs text-gray-600 font-sans mb-6">JPG, GIF ou PNG. Máximo 1MB.</p>
                  </div>
                </div>
                {/* formulario */}
                <div>
                    <form >
                     <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="gap-2">
                            <Label className="text-sm font-semibold text-gray-700">Nome</Label>
                            <Input type="text" name="name" className="rounded-md border-gray-300"/>
                        </div>
                        <div className="gap-2">
                            <Label className="text-sm font-semibold text-gray-700">Sobrenome</Label>
                            <Input type="text" name="lastname" className="border-gray-300 rounded-md"/>
                        </div>
                     </div>
                     <div className="mt-6">
                        <Label className="text-sm font-semibold text-gray-700">Email</Label>
                        <Input type="email" name="email" className="border-gray-300 rounded-md"/>
                     </div>
                     <div className="mt-6">
                        <Label className="text-sm font-semibold text-gray-700">Biografia</Label>
                        <Textarea typeof="text" name="biography" placeholder="Conte um pouco sobre você..." className="border-gray-300 rounded-md placeholde:text-sm placeholder:font-sans pb-10"/>
                     </div>
                    </form>
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
