// src/components/UserCard.jsx
import './UserCard.css';

//o <a> </a> vai ser o que torna possível clicar na imagem 
function UserCard({ user }) {
    return (
        <a onClick={clicar}>
            <div className='user-card'>
                <img src={user.avatar} alt={`${user.firstName} avatar`} />
                <h3>{user.firstname} {user.lastname}</h3>
                <p>{user.email}</p>
                <small>{user.address}</small>
            </div>
        </a>
    )
}
//manipulador de eventos que faz algo ao clicar no <a><a/>
const clicar = (event) => {
    event.preventDefault(); //evita que a pagina do dashboard recarregue
    window.open(event.target.href, '_blank', 'noopener,noreferrer');
}

export default UserCard;