// src/App.jsx
import { use, useEffect, useState } from 'react';
import UserCard from './components/UserCard';
import './App.css';

function App() {
  const [users, setUsers] = useState([]); // Array para armazenar a lista de usuarios
  const [select, setSelect] = useState(null); // Estado para armazenar o usuario selecionado
  const [pagina, setPagina] = useState(1); // Estado para controlar a pagina em que se está

  const selecionar = (user) => { // Função para selecionar um usuario
    setSelect(user);
  }

  const deselecionar = () => { // Função para deselecionar o usuario
    setSelect(null);
  }

  useEffect(() => { // Hook para buscar os usuarios quando o componente é montado
    fetch('http://localhost:3001/peoples') // Faz uma requisição para buscar os usuarios
    .then((res) => res.json()) // Converte a resposta em JSON
    .then((data) => setUsers(data)) // Atualiza o estado com os dados recebidos
    .catch((err) => console.error('Erro ao buscar usuarios:', err));
  }, []);

  if(select){
    return (
      <div className="App">
        <h1>Detalhes do Usuario</h1>
        <div className="user-details">
          <img src={select.avatar} alt={select.name} className="user-avatar" />
          <p><strong>Nome:</strong> {select.firstname} {select.lastname}</p>
          <p><strong>Email:</strong> {select.email}</p>
          <p><strong>Endereço:</strong> {select.address}</p>
          <button onClick={deselecionar}>Voltar</button>
        </div>
      </div>
    );
  }
  
  //paginação
  const proxima = () => {
    if (pagina * 5 >= users.length) {
      return; // Não faz nada se já estiver na última página
    }
    setPagina(pagina + 1);
  };

  const anterior = () => {
    setPagina(pagina - 1);
  }

  const ultimoUsuario = (pagina * 5); // índice do último usuário na página atual
  const primeiroUsuario = (ultimoUsuario - 5); // índice do primeiro usuário na página atual
  const usuariosPaginados = users.slice(primeiroUsuario, ultimoUsuario); // Pega os usuarios da página atual
  
  return (
    <div className="App">
      <h1>Dashboard de Usuarios</h1>
      <p>Total de usuarios: {users.length}</p>
      <div className="user-container">
        {usuariosPaginados.map((user) => ( //mostra os usuarios da página atual
          <a onClick={() => selecionar(user)}> {/* torna o card clicável */} 
          <UserCard key={user.id} user={user} /> {/* cartão do usuario */}
          </a>
        ))}
      </div>
      <span> {/* Exibe a pagina atual e o total de paginas */}
        Página {pagina} de {Math.ceil(users.length / 5)}
      </span>
      <button onClick={anterior} disabled={pagina === 1}>Anterior</button>
      <button onClick={proxima} disabled={pagina * 5 >= users.length}>Proximo</button>
    </div>
  );
  
}

export default App;