import { Banner } from "@/components/Fragments/Banner";
import { LoginForm } from "@/components/LoginForm";

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Banner/>
      <LoginForm />
    </main>
  )
}
