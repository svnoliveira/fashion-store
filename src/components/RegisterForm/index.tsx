"use client"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { IoMdArrowBack } from "react-icons/io"
import { TRegisterValues, registerSchema } from "./schema"
import { useUserStore } from "@/stores/useUserStore"
import { useRouter } from "next/navigation"

export const RegisterForm = () => {

  const { registerUser, loading } = useUserStore((store) => store);
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterValues>({
    resolver: zodResolver(registerSchema),
  });

  const parseRegisterData = async ({ name, email, password }: TRegisterValues) => {
    await registerUser({ email, password, name }) && push("login");
  };

  return (
    <form onSubmit={handleSubmit((formData) => parseRegisterData(formData))}>
      <Link href={"/"}>
        <button type="button">
          <IoMdArrowBack />
          <span>BACK</span>
        </button>
      </Link>
      <h1>REGISTER</h1>
      <span>Welcome, Administrator!</span>
      {loading ? <span>LOADING</span>
      :<div>
        <input type="text" placeholder="NAME" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
        <input type="email" placeholder="E-MAIL" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
        <input type="text" placeholder="PASSWORD" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
        <input type="password" placeholder="CONFIRM PASSWORD" {...register("confirmPassword")} />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <button type="submit">REGISTER</button>
      </div>}
    </form>
  )
};