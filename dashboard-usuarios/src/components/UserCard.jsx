// src/components/UserCard.jsx
import './UserCard.css';

function UserCard({ user }) { // Componente para exibir os detalhes de um usuario
    return (
        <div className='user-card'>
            <img src={user.avatar} alt={`${user.firstname} avatar`} />
            <h3>{user.firstname} {user.lastname}</h3>
            <p>{user.email}</p>
            <small>{user.address}</small>
        </div>
    )
}

export default UserCard;