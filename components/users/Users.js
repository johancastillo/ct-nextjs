import Router from 'next/router'

const Users = (props) => {
    return (
        <ul className="list-group-item">
            {
                props.users.map( 
                    user => ( 
                        <li 
                            key={user.id}
                            onClick={ e => Router.push('/profile/[id]', `/profile/${user.id}`) }
                            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center p-4">
                            <div>
                                <h5>{`${user.first_name} ${user.last_name}`}</h5>
                                <p>Email: {user.email}</p>
                            </div>

                            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} style={{borderRadius: '50%'}} />
                        </li>
                    )
                )
            }
        </ul>
    )
}

export default Users;