import './globals.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Humance By Yasar Hameed',
  keywords: 'QA, automation, consulting, Cypress, CI/CD, UAE',
  authors: [{ name: 'Yasar Hameed', url: 'https://yasarhameed.com' }],
  openGraph: {
    title: 'Humance By Yasar Hameed',
    description: 'Expert QA automation consulting for startups in UAE',
    url: 'https://qa-company.com',
    type: 'website',
    images: [
      {
        url: 'https://qa-company.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'QACompany Logo',
      },
    ],
    },
  };

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500 min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-grow max-w-5xl mx-auto p-6">{children}</main>
          <Footer />
        </body>
      </html>
    )
}
