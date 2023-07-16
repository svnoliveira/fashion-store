import { RegisterBanner } from "@/components/Fragments/RegisterBanner"
import { RegisterForm } from "@/components/RegisterForm";

export default function Register() {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-10 max-w-[1448px] m-auto px-3 pt-14">
      <RegisterBanner />
      <RegisterForm />
    </main>
  )
}
