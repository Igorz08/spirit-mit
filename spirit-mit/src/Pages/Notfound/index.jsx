import React from 'react'
import './Notfound.css'

export default function Notfound() {
  return (
    <main className="not-found">
      <div className="not-found__content">
        <span className="not-found__code">404</span>

        <h1>Página não encontrada</h1>

        <p>
          Desculpe, a página que você está procurando não existe
          ou foi movida para outro endereço.
        </p>

        <a href="/" className="not-found__button">
          Voltar para o início
        </a>
      </div>
    </main>
  )
}
