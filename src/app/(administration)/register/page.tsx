import { Banner } from "@/components/Fragments/Banner";
import { RegisterForm } from "@/components/RegisterForm";

export default function Register() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Banner />
      <RegisterForm />
    </main>
  )
}
