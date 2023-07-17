import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Register | Fashion Store',
  description: 'Register page for Fashion Store administrator',
}

export default function RegisterLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>{children}</section>
    )
  }