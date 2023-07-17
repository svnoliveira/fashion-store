import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Admin | Fashion Store',
  description: 'Admin page for Fashion Store',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>{children}</section>
  )
}