import './globals.css'
import Navigation from '../components/navigation'
import 'semantic-ui-css/semantic.min.css'

import { AuthProvider, CartProvider } from '@/contexts'
import Footer from '@/components/footer'


export const metadata = {
  title: 'Bandolero-shop',
  description: 'Desarrollado por Manuel Pérez',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#f1f1f1]' >
        <AuthProvider>
          <CartProvider>
            <Navigation />
            {children}
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
