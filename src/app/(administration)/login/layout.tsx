import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Login | Fashion Store',
  description: 'Login page for Fashion Store administrator',
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>{children}</section>
  )
}