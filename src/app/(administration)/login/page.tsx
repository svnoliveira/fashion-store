import { Banner } from "@/components/Fragments/Banner";
import { LoginForm } from "@/components/LoginForm";

export default function Login() {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-10 max-w-[1448px] m-auto px-3 pt-14">
      <Banner/>
      <LoginForm />
    </main>
  )
}
