import { RegisterBanner } from "@/components/Fragments/RegisterBanner"
import { RegisterForm } from "@/components/RegisterForm";

export default function Register() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RegisterBanner />
      <RegisterForm />
    </main>
  )
}
