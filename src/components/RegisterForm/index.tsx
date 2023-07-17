"use client"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { IoMdArrowBack } from "react-icons/io"
import { TRegisterValues, registerSchema } from "./schema"
import { useUserStore } from "@/stores/useUserStore"
import { useRouter } from "next/navigation"
import { Loading } from "../Fragments/Loading"

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

    <form onSubmit={handleSubmit((formData) => parseRegisterData(formData))}
      className="flex flex-col justify-between w-full max-w-[568px]">
      <Link href={"/"}>
        <button type="button" className="flex gap-2 items-center">
          <IoMdArrowBack />
          <span className="text-paragraph tracking-widest hover:underline decoration-solid decoration-black decoration-2">BACK</span>
        </button>
      </Link>
      <h1 className="text-title2-m md:text-title2">REGISTER</h1>
      <span className="text-paragraph text-center lg:text-left pb-2 pt-6">Welcome, Administrator!</span>
      {loading ? <Loading />
        : <div className="flex flex-col gap-3">
          <div className="relative">
            <input className="bg-grey h-20 p-6 text-paragraph w-full"
              type="text" placeholder="NAME" {...register("name")} />
            {errors.name && <p className="absolute bottom-0 text-red left-5">{errors.name.message}</p>}
          </div>
          <div className="relative">
            <input className="bg-grey h-20 p-6 text-paragraph w-full"
              type="email" placeholder="E-MAIL" {...register("email")} />
            {errors.email && <p className="absolute bottom-0 text-red left-5">{errors.email.message}</p>}
          </div>
          <div className="relative">
            <input className="bg-grey h-20 p-6 text-paragraph w-full"
              type="text" placeholder="PASSWORD" {...register("password")} />
            {errors.password && <p className="pl-6 text-red">{errors.password.message}</p>}
          </div>
          <div className="relative">
            <input className="bg-grey h-20 p-6 text-paragraph w-full"
              type="password" placeholder="CONFIRM PASSWORD" {...register("confirmPassword")} />
            {errors.confirmPassword && <p className="absolute bottom-0 text-red left-5">{errors.confirmPassword.message}</p>}
          </div>
          <button type="submit"
            className="flex bg-black text-white justify-center items-center w-full lg:w-fit px-4 py-3 hover:opacity-50 text-small-price tracking-[0.2rem] border-2 border-solid border-black"
          >REGISTER</button>
        </div>}
    </form>
  )
};