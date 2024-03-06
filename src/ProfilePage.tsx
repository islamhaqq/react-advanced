import React, {useContext, useEffect} from 'react';
import { UserContext } from './UserContext';

function ProfilePage() {
    const context = useContext(UserContext);

    const { user, setUser } = context || {};

    useEffect(() => {
        // Load user data here and set it
        if (setUser) {
            setUser('Jane Doe');
        }
    }, [setUser]);

    return user ? <h1>Profile Page - Welcome {user}</h1> : <h1>Loading...</h1>
}

export default ProfilePage;
