import { useRouter } from "next/router";
import Template from '../../components/template/Template';

import fetch from "isomorphic-fetch";


const Profile = ({user}) =>  {

    const router = useRouter();
    const {id} = router.query;

    return (
        <Template>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header text-center">
                            <img src={user.avatar} alt="" style={{borderRadius: '50%'}} />
                        </div>
                        <div className="card-body text-center">
                            <h3>
                                {`${user.id}. ${user.first_name} ${user.last_name}` }
                            </h3>
                            <p>Email: {user.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Template>
    )
}

Profile.getInitialProps = async (ctx) => {
    const response = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
    const resJSON = await response.json()

    return {user: resJSON.data}
}

export default Profile;