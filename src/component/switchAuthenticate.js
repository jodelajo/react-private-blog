import React from 'react';
function switchAuthenticate (props) {
    const {isAuthenticated, setIsAuthenticated} = props;

    return(
        <>
            {isAuthenticated ?
                <button onClick={() => setIsAuthenticated(false)}>Uitloggen</button>
                :
                <button onClick={() => setIsAuthenticated(true)}>Inloggen</button>
            }
        </>
    )
}
export default switchAuthenticate;