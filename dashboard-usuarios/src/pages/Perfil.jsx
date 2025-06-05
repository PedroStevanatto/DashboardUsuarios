
export default function Perfil({ user }) {
    return (
            <div className='user-card'>
                <img src={user.avatar} alt={`${user.firstName} avatar`} />
                <h3>{user.firstname} {user.lastname}</h3>
                <p>{user.email}</p>
                <small>{user.address}</small>
            </div>
    )
}

