'use client'

import Link  from "next/link"
import Header from "./header"


export default function Home() {

  return (
    <main>
      <Header />

      <div className="px-4 py-5 my-5 text-center">
        <h1 className='display-5 fw-bold text-body-emphasis'>Home</h1>
      
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, voluptate, quibusdam, quia voluptas quod quos
          exercitationem voluptatem quas doloribus quidem. Quisquam, quia
          voluptas. Quisquam, quia voluptas. Quisquam, quia voluptas.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link className="btn btn-primary btn-lg px-4 gap-3" href={'login'}>Cadastre-se</Link>
          <Link className="btn btn-outline-secondary btn-lg px-4" href={'signin'}>Entrar</Link>
        </div>
        </div>
      </div>
      
    </main>
  )
}
