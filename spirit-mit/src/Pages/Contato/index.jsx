import { useState } from "react";
import "./Contato.css";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "Vendas",
    mensagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  // Envia os dados para a rota 'mensagens' (ou 'contatos') do seu db.json
  fetch("http://localhost:3000/mensagens", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
        alert("Mensagem salva no banco com sucesso!");
        // Limpa os campos do formulário
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          assunto: "Vendas",
          mensagem: "",
        });
      }
    })

    .catch((error) => console.error("Erro ao salvar mensagem no db.json:", error));

  };

  

  return (
    <section className="contato">
      <div className="contatoHeader">
        <h2>ENTRE EM CONTATO COM A <strong>SPIRIT MIT MOTORS</strong></h2>
        <p>Estamos à disposição para atender suas dúvidas, agendamentos e orçamentos.</p>
      </div>

      <div className="contatoGrid">
        {/* COLUNA 1: INFORMAÇÕES DE CONTATO */}
        <div className="contatoInfo">
          {/* NÚMEROS DE CONTATO */}
          <div className="infoBloco">
            <h3>TELEFONES & WHATSAPP</h3>
            <p><strong>Vendas:</strong> (11) 12345-6789</p>
            <p><strong>Oficina & Serviços:</strong> (11) 69420-1234</p>
            <p><strong>Atendimento Geral:</strong> (11) 9876-6789</p>
          </div>

          {/* HORÁRIOS DE FUNCIONAMENTO */}
          <div className="infoBloco">
            <h3>HORÁRIO DE FUNCIONAMENTO</h3>
            <p><strong>Segunda a Sexta:</strong> 08:00 às 20:00</p>
            <p><strong>Sábados:</strong> 08:00 às 18:00</p>
            <p><strong>Domingos e Feriados:</strong> Fechado</p>
          </div>

          {/* REDES SOCIAIS */}
          <div className="infoBloco">
            <h3>REDES SOCIAIS</h3>
            <div className="redesSociais">
              <a href="https://www.instagram.com/spiritmitmotors.22/" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
            </div>
          </div>

          {/* ENDEREÇO / LOCALIZAÇÃO */}
          <div className="infoBloco">
            <h3>NOSSA LOJA</h3>
            <p>Rua Alexandre Kadunc, Embu das Artes, SP</p>
          </div>
        </div>

        {/* COLUNA 2: FORMULÁRIO DE MENSAGEM DIRECTA */}
        <div className="contatoFormContainer">
          <h3>ENVIE UMA MENSAGEM</h3>
          <form onSubmit={handleSubmit} className="contatoForm">
            <div className="formGroup">
              <label htmlFor="nome">Nome Completo</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Digite seu nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div className="formRow">
              <div className="formGroup">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@exemplo.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="formGroup">
                <label htmlFor="telefone">Telefone / WhatsApp</label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  placeholder="(00) 00000-0000"
                  value={formData.telefone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="formGroup">
              <label htmlFor="assunto">Assunto</label>
              <select
                id="assunto"
                name="assunto"
                value={formData.assunto}
                onChange={handleChange}
              >
                <option value="Revisao">Agendar Revisão / Serviço</option>
                <option value="Pecas">Peças e Acessórios</option>
                <option value="Outros">Outros Assuntos</option>
              </select>
            </div>

            <div className="formGroup">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows="4"
                placeholder="Como podemos te ajudar?"
                value={formData.mensagem}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btnEnviarContato">
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contato;