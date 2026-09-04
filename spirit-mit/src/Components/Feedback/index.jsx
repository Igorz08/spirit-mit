import { useState, useEffect } from "react";
import estrela from "../../assets/estrela.png";
import perfil from "../../assets/perfil.png";
import "./Feedback.css";

const Feedback = () => {
  const [usuarios, setUsuarios] = useState([]);
  
  // Estado para controlar os campos do novo comentário
  const [novoComentario, setNovoComentario] = useState({
    nome: "",
    nota: "5.0",
    text: "",
  });

  // Busca os comentários da API
  useEffect(() => {
    fetch("http://localhost:3000/comments")
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.error("Erro na API:", error));
  }, []);

  // Manipula as mudanças nos inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovoComentario({ ...novoComentario, [name]: value });
  };

  // Envia o novo comentário via POST
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!novoComentario.nome.trim() || !novoComentario.text.trim()) {
      alert("Por favor, preencha o seu nome e o comentário.");
      return;
    }

    fetch("http://localhost:3000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoComentario),
    })
      .then((response) => response.json())
      .then((data) => {
        // Adiciona o comentário criado à lista de comentários na tela
        setUsuarios([data, ...usuarios]);
        // Limpa o formulário
        setNovoComentario({ nome: "", nota: "5.0", text: "" });
      })
      .catch((error) => console.error("Erro ao enviar comentário:", error));
  };

  // Função para deletar o comentário
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/comments/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setUsuarios(usuarios.filter((user) => user.id !== id));
        }
      })
      .catch((err) => console.error("Erro ao deletar comentário:", err));
  };

  return (
    <section className="feedback">
      <div className="feedbackTitulo">
        <h2>O QUE NOSSOS CLIENTES DIZEM:</h2>
        <p>A opinião de quem já confiou sua Mitsubishi à Spirit Mit Motors.</p>
      </div>

      

      {/* LISTA DE COMENTÁRIOS */}
      <div className="feedbackContainer">
        {usuarios.map((user) => (
          <article className="contentBack" key={user.id}>
            <button
              className="btnDeletar"
              onClick={() => handleDelete(user.id)}
            >
              Deletar
            </button>

            <div className="clienteFeedback">
              <img src={perfil} alt="Foto de perfil" />
              <div>
                <h3>{user.nome}</h3>
                <div className="avaliacao">
                  <img src={estrela} alt="Estrela" />
                  <strong>{Number(user.nota).toFixed(1)}</strong>
                </div>
              </div>
            </div>

            <p className="comentarioFeedback">{user.text}</p>
          </article>
        ))}
      </div>

      <hr className="separador"/>

        {/* FORMULÁRIO DE NOVO COMENTÁRIO */}
      <div className="feedbackFormContainer">
        <h3>FAÇA SEU COMENTÁRIO TAMBÉM:</h3>
        <form onSubmit={handleSubmit} className="feedbackForm">
          <div className="formGroupInline">
            <div className="formGroup">
              <label htmlFor="nome">Seu Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Insira seu nome e sobrenome"
                value={novoComentario.nome}
                onChange={handleChange}
              />
            </div>

            <div className="formGroup">
              <label htmlFor="nota">Nota (0 a 5)</label>
              <select
                id="nota"
                name="nota"
                value={novoComentario.nota}
                onChange={handleChange}
              >
                <option value="5.0">5.0</option>
                <option value="4.5">4.5</option>
                <option value="4.0">4.0</option>
                <option value="3.5">3.5</option>
                <option value="3.0">3.0</option>
              </select>
            </div>
          </div>

          <div className="formGroup">
            <label htmlFor="text">Comentário</label>
            <textarea
              id="text"
              name="text"
            //   rows="3"
              placeholder="Escreva como foi sua experiência..."
              value={novoComentario.text}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btnEnviar">
            Publicar Comentário
          </button>
        </form>
      </div>

    </section>
  );
};

export default Feedback;