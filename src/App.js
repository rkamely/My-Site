import React, {lazy, Suspense, useState} from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import SwitchContext from './Context/ThemeSwitch'
import Loading from "./Containers/Loading";

import "./App.scss"


function App() {

    const Home = lazy(() => import("./Pages/Home"));
    const Wrapper = lazy(() => import("./HOC/Wrapper"));
    const [lightTheme, setLightTheme] = useState(JSON.parse(localStorage.getItem('theme')))
    const themeSwitchHandler = () => {
        localStorage.setItem('theme', `${!lightTheme}`)
        setLightTheme(!lightTheme)
    }

    return (
        <div className="App">
            <Router>
                <Suspense fallback={<Loading/>}>
                    <Switch>
                        <SwitchContext.Provider value={{
                            lightTheme,
                            themeSwitchHandler,
                        }}>
                            <Wrapper path='/' exact component={Home}/>
                        </SwitchContext.Provider>
                    </Switch>
                </Suspense>
            </Router>
        </div>
    );
}

export default App;
