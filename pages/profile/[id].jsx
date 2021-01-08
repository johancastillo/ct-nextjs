import { useRouter } from "next/router";
import Template from '../../components/template/Template';

import fetch from "isomorphic-fetch";


const Profile = ({users}) =>  {

    const router = useRouter();
    const {id} = router.query;

    return (
        <Template>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header">
                            <img src={users.avatar} alt="" />
                        </div>
                        <div className="card-body"></div>
                    </div>
                </div>
            </div>
        </Template>
    )
}

Profile.getInitialProps = async (ctx) => {
    const response = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
    const resJSON = await response.json()

    return {users: resJSON.data}
}

export default Profile;