import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const HandleLoginUser = () => {
    navigate("/Login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted ">
      <Card className="w-full max-w-md shadow-2xl ">
        <CardContent className="p-8">
          <h2 className="font-bold text-2xl text-gray-600 text-center">
            Criar Conta
          </h2>
          <p className="text-center mb-4 text-emerald-600 text-sm">
            Melhorando o seu cotidiano!
          </p>
          <form className="space-y-4">
            <div className="space-y-2 ">
              <Label htmlFor="name" />
              Nome:
              <input
                id="name"
                placeholder="Digite seu Nome"
                className="px-4 py-1 rounded-md border border-zinc-300 w-full placeholder:text-sm placeholder:text-gray-500 focus:outline-none focus:border-emerald-600 transition-colors duration-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" />
              E-mail:
              <input
                id="email"
                type="email"
                placeholder="Digite seu E-mail"
                className="px-4 py-1 rounded-md border border-zinc-300 w-full placeholder:text-sm placeholder:text-gray-500 focus:outline-none focus:border-emerald-600 transition-colors duration-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" />
              Senha:
              <input
                id="password"
                type="password"
                placeholder="Digite sua Senha"
                className="px-4 py-1 rounded-md border border-zinc-300 w-full placeholder:text-sm placeholder:text-gray-500 focus:outline-none focus:border-emerald-600 transition-colors duration-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" />
              Confirme sua Senha:
              <input
                id="confirmPassword"
                type="password"
                placeholder="Repita sua senha"
                className="px-4 py-1 rounded-md border border-zinc-300 w-full placeholder:text-sm placeholder:text-gray-500 focus:outline-none focus:border-emerald-600 transition-colors duration-300"
              />
            </div>
            <Button
              // onClick={}
              className="text-white text-lg bg-emerald-600 hover:bg-emerald-700 w-full"
            >
              Criar
            </Button>
            <div className="flex justify-center items-center">
              <p className="mr-1">Ja possui conta ?</p>
              <button
                onClick={HandleLoginUser}
                className="underline underline-offset-4 hover:text-emerald-600"
              >
                Entrar
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Register;
