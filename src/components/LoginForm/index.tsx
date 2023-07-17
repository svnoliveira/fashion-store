"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TLoginValues, loginSchema } from "./schema";
import { useUserStore } from "@/stores/useUserStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loading } from "../Fragments/Loading";

export const LoginForm = () => {

  const { loginUser, loading } = useUserStore((store) => store)
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginValues>({
    resolver: zodResolver(loginSchema),
  });

  const parseLoginData = async ({ email, password }: TLoginValues) => {
    await loginUser({ email, password }) && push("/admin/home");
  };

  return (

    <form onSubmit={handleSubmit((formData) => parseLoginData(formData))}
    className="h-96 flex flex-col justify-between w-full max-w-[568px]">
      <h1 className="text-title2-m md:text-title2">LOGIN</h1>
      {loading ? <Loading />
        : <>
          <input className="bg-grey h-20 p-6 text-paragraph"
          type="email" placeholder="E-MAIL" {...register("email")} />
          {errors.email && <p className="text-red">{errors.email.message}</p>}
          <input className="bg-grey h-20 p-6 text-paragraph"
          type="password" placeholder="PASSWORD" {...register("password")} />
          {errors.password && <p className="text-red">{errors.password.message}</p>}
          <div className="flex gap-4 justify-around lg:justify-start">
            <button type="submit"
            className="flex bg-black text-white items-center w-fit px-4 py-3 hover:opacity-50 text-small-price tracking-[0.2rem] border-2 border-solid border-black"
            >ACCESS</button>
            <Link href={"/register"}>
              <button type="button"
              className="flex bg-white text-black items-center w-fit px-4 py-3 hover:bg-grey text-small-price tracking-[0.2rem] border-2 border-solid border-black"
              >REGISTER</button>
            </Link>
          </div>
        </>}
    </form>
  )
}