"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TLoginValues, loginSchema } from "./schema";
import { useUserStore } from "@/stores/useUserStore";
import Link from "next/link";
import { useRouter } from "next/navigation";

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

    <form onSubmit={handleSubmit((formData) => parseLoginData(formData))}>
      <h1>LOGIN</h1>
      {loading ? <span>LOADING</span>
        : <>
          <input type="email" placeholder="E-MAIL" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
          <input type="password" placeholder="PASSWORD" {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}
          <div>
            <button type="submit">ACCESS</button>
            <Link href={"/register"}>
              <button type="button">REGISTER</button>
            </Link>
          </div>
        </>}
    </form>
  )
}