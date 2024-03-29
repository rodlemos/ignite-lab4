import { EnvelopeSimple, Lock } from "phosphor-react";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";
import { Text } from "./components/Text";
import { TextInputComponent } from "./components/TextInput";
import "./styles/global.css";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4 leading-none">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-2">
          Faça login e comece a usar
        </Text>
      </header>

      <form className="flex flex-col gap-4 items-stretch w-full max-w-[400px] mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de E-mail</Text>
          <TextInputComponent.Root>
            <TextInputComponent.Icon>
              <EnvelopeSimple />
            </TextInputComponent.Icon>

            <TextInputComponent.Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
            />
          </TextInputComponent.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInputComponent.Root>
            <TextInputComponent.Icon>
              <Lock />
            </TextInputComponent.Icon>

            <TextInputComponent.Input
              id="password"
              type="password"
              placeholder="********"
            />
          </TextInputComponent.Root>
        </label>

        <label htmlFor="remember" className="flex gap-2 items-center">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col gap-4 items-center mt-8 ">
        <Text asChild size="sm">
          <a
            href=""
            className="text-gray-400 leading-none underline hover:text-gray-200"
          >
            Esqueceu sua senha?
          </a>
        </Text>
        <Text asChild size="sm">
          <a
            href=""
            className="text-gray-400 leading-none underline hover:text-gray-200"
          >
            Não possui conta? Crie agora!
          </a>
        </Text>
      </footer>
    </div>
  );
}

export default App;
