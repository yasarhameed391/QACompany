import './globals.css'
import NavBar from '../components/NavBar'

export const metadata = {
  title: 'QACompany Portfolio',
  description: 'QA automation consulting portfolio site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="max-w-5xl mx-auto p-6">{children}</main>
      </body>
    </html>
  )
}
