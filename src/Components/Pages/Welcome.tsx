import { Card, CardContent } from "../../components/ui/card";
import { Button } from "@/components/ui/button";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { TiFlash } from "react-icons/ti";
import Footer from "../../Layout/Footer"
import { useNavigate } from "react-router-dom";

function Welcome() {
    
    const navigate = useNavigate()

    const HandleCretaNewAccount = () => {
        navigate('/Register')
    }

    const HandleLoginUser = () => {
        navigate('/Login')
    }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* topo */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <IoMdCheckmarkCircleOutline className="h-8 w-8 text-emerald-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-900">TaskFlow</h1>
          </div>
          <p className="text-gray-600 max-w-md mx-auto">
            Organize suas tarefas, gerencie projetos e aumente sua produtividade
          </p>
        </header>
        {/* area principal */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 ">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Bem-Vindo ao seu
              <span className="text-emerald-600 block">
                Gerenciador de tarefas
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Simplifique sua vida organizando tarefas, definindo prioridades e
              acompanhando seu progresso em um só lugar.
            </p>
            {/* botoes */}
            <div className="flex flex-col sm:flex-row gab-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px8 py-3 mr-4"
                onClick={HandleCretaNewAccount}
              >
                Criar conta gratuita
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-emerald-600 border-emerald-600 hover:text-emerald-700 px-8 py-3"
                onClick={HandleLoginUser}
              >
                Fazer login
              </Button>
            </div>
          </div>
          {/* exemplo do uso do app/site */}
          <div className="grid md:grid-cols-3 gab-6 mb-12">
            {/* primeiro */}
            <Card className="border-0 shadow-xl mr-3">
              <CardContent className="p-6 text-center">
                <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IoMdCheckmarkCircleOutline className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Organize suas Tarefas
                </h3>
                <p className="text-gray-600 text-sm">
                  Crie, edite e organize suas tarefas de forma simples e
                  intuitiva
                </p>
              </CardContent>
            </Card>
            {/* segundo */}
            <Card className="border-0 shadow-xl mr-3">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <SlCalender className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Gerencie Prazos
                </h3>
                <p className="text-gray-600 text-sm">
                  Defina datas de vencimento e nunca mais perca um prazo
                  importante
                </p>
              </CardContent>
            </Card>
            {/* terceiro */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TiFlash className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Aumente a Produtividade
                </h3>
                <p className="text-gray-600 text-sm">
                  Acompanhe seu progresso e mantenha-se motivado com
                  estatísticas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default Welcome;
