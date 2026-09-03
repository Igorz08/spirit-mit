import React from 'react'

export default function Home() {
  return (
    <div className='container'>

        <div className='bannerHome'>
          <h2>Sua Mitsubishi nas mãos de quem entende só dela.</h2>

          <p>Câmbio, embreagem, suspensão e diagnóstico para L200, 
            Pajero, Pajero Sport, ASX e toda a linha Mitsubishi. 
            Peças de qualidade e mão de obra especializada.</p>
        </div>

        <div className="aba1Home">
          <h3><strong>01</strong> Uma oficina, uma marca, um foco</h3>

          <p>
          A Spirit Mit Motors é uma oficina mecânica em Embu das Artes especializada
          exclusivamente em veículos Mitsubishi — das picapes L200 aos utilitários
          Pajero e Pajero Sport. A equipe trabalha todos os dias com a mesma marca, 
          o que significa conhecer de perto cada detalhe do câmbio, da suspensão e 
          do motor dessas caminhonetes.
          </p>
        </div>
          
          <div className="aba2Home">
            <h3><strong>02</strong> O que fazemos</h3>

            <p>
              Manutenção completa para sua Mitsubishi, com peças de marcas como Cofap e Fras-le.
            </p>

            <div className="miniAbaHome">
              <h4>◆ Câmbio e embreagem</h4>
              <p>Reparo de câmbio manual e automático, troca de kit de embreagem completo.</p>
            </div>

            <div className="miniAbaHome">
              <h4>◆ Suspensão</h4>
              <p>Revisão e troca de amortecedores, molas e batentes — segurança na frenagem e no controle do veículo.</p>
            </div>

            <div className="miniAbaHome">
              <h4>◆ Freios</h4>
              <p>Sapatas, pastilhas e lonas com peças de marcas reconhecidas no mercado.</p>
            </div>

            <div className="miniAbaHome">
              <h4>◆ Kit de amortecedor</h4>
              <p>Boot kits e componentes de junta homocinética (CV joint).</p>
            </div>

          </div>

          <div className="aba3Home">
            <h3><strong>03</strong> Dentro da oficina</h3>

            <img src="#" alt="foto1" />
            <img src="#" alt="foto2" />
            <img src="#" alt="foto3" />
          </div>
        
    </div>
  )
}
