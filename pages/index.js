import React from 'react';
import Template from '../components/template/Template';
import Users from '../components/users/Users';

import fetch from "isomorphic-fetch";

const Index = (props) => {
    return(
        <Template>
            <Users users={props.users} />
        </Template>
    )
}

Index.getInitialProps = async (ctx) => {
    const response = await fetch('https://reqres.in/api/users')
    const resJSON = await response.json()

    return {users: resJSON.data}
}

export default Index;