// src/App.jsx
import { use, useEffect, useState } from 'react';
import UserCard from './components/UserCard';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [select, setSelect] = useState(null);
  const [pagina, setPagina] = useState(1);

  const selecionar = (user) => {
    setSelect(user);
  }

  const deselecionar = () => {
    setSelect(null);
  }

  useEffect(() => {
    fetch('http://localhost:3001/peoples')
    .then((res) => res.json())
    .then((data) => setUsers(data))
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

  const ultimoUsuario = (pagina * 5);
  const primeiroUsuario = (ultimoUsuario - 5);
  const usuariosPaginados = users.slice(primeiroUsuario, ultimoUsuario);
  
  return (
    <div className="App">
      <h1>Dashboard de Usuarios</h1>
      <p>Total de usuarios: {users.length}</p>
      <div className="user-container">
        {usuariosPaginados.map((user) => (
          <a onClick={() => selecionar(user)}>
          <UserCard key={user.id} user={user} />
          </a>
        ))}
      </div>
      <button onClick={anterior} disabled={pagina === 1}>Anterior</button>
      <button onClick={proxima} disabled={pagina * 5 >= users.length}>Proximo</button>
    </div>
  );
  
}

export default App;