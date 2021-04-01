import React, {useState} from 'react';
import './App.css';
import {
    Switch,
    Route,
    NavLink,
    useHistory,
} from 'react-router-dom';
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import Blog from "./component/Blog";


import PrivateRoute from "./component/PrivateRoute";


function App() {
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);
    const history = useHistory();
    console.log(isAuthenticated)

    function handleClickLogIn() {
        history.push("/blogposts");
        toggleIsAuthenticated(true)
    }

    function handleClickLogOut() {
        history.push("/");
        toggleIsAuthenticated(false)
    }

    return (
        <>
            <nav>
                <div className="nav-container">
                    <ul>
                        <li>
                            <NavLink to="/" exact activeClassName="active-link"> Home</NavLink>
                        </li>
                        {isAuthenticated && <li>
                            <NavLink to="/blogposts" activeClassName="active-link">
                                Blog Overzicht pagina
                            </NavLink>
                        </li>}

                        {!isAuthenticated ? <li>
                                <NavLink to="/login" activeClassName="active-link">
                                    Inloggen
                                </NavLink>
                            </li>
                            :
                            <li>
                                <NavLink to="/logout" activeClassName="active-link">
                                    Uitloggen
                                </NavLink>
                            </li>}
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/login">

                    <div className="main">
                        <button type="button" className="login-button" onClick={handleClickLogIn}>Log in</button>
                    </div>
                </Route>
                <Route path="/logout">
                    <div className="main">
                        <button type="button" className="login-button" onClick={handleClickLogOut}>Uitloggen</button>
                    </div>
                </Route>
                <PrivateRoute exact path="/blogposts" isAuthenticated={isAuthenticated}>
                    <BlogPost/>
                </PrivateRoute>
                <PrivateRoute path="/blog/:slug" isAuthenticated={isAuthenticated}>
                    <Blog/>
                </PrivateRoute>

            </Switch>

        </>
    );
}

export default App;

