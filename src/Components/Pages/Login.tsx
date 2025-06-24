import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@radix-ui/react-label'
import { useNavigate } from 'react-router-dom'

function Login() {
  
   const navigate = useNavigate()

   const HandleCretaNewAccount = () => {
        navigate('/Register')
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted ">
      <Card className="w-full max-w-md shadow-2xl ">
        <CardContent className="p-8">
          <h2 className="font-bold text-2xl text-gray-600 text-center mb-6">
            Bem-Vindo de Volta!
          </h2>
          <form className="space-y-4">
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
            <Button
              // onClick={}
              className="text-white text-lg bg-emerald-600 hover:bg-emerald-700 w-full"
            >
              Entrar
            </Button>
            <div className="flex justify-center items-center">
              <p className="mr-1">Primeira vez aqui ?</p>
              <button
                onClick={HandleCretaNewAccount}
                className="underline underline-offset-4 hover:text-emerald-600"
              >
                Criar conta
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login
