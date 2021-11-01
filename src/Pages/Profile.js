import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

const Profile = ({login}) => {

    const history = useHistory()

    useEffect(()=> {
        if(!login) {
            history.push('/')
        }
    }, [login, history])
    return (
        <h1>Profile Page</h1>
    )
};

export default Profile;