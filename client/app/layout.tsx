// import './globals.css'
import { Inter } from 'next/font/google'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/css/bootstrap-reboot.css";
import "bootstrap/dist/css/bootstrap-utilities.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-reboot.min.css";




const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Checklist Manager',
  description: 'Aplicativo para gerar checklists de auditoria de software'
}

export interface Project {
    name: String,
    description: String
}

export interface Checklist {
    name: String,
    description: String,
    lastUpdate: Date,
    projectID: number
}

export interface Auditoria {
    name: String,
    description: String,
    date: Date,
    project: Project
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
