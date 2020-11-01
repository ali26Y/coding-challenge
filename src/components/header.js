import React, { Fragment } from 'react';

const Header = ({ type }) => {
    const startTrial = () => console.log('start trial');
    const login = () => console.log('login in user');

    return (
        <Fragment>
            <div className="top-content light-font">
                <div className="grid-container container">
                    <div>
                        <h1>DEMO Streaming</h1>
                    </div>
                    <div className="button-wrapper">
                        <button className="link-button btn" onClick={login}>Log in</button>
                        <button className="action-button btn" onClick={startTrial}>Start your free trial</button>
                    </div>
                </div>
            </div>
            <div className="title-content light-font">
                <div className="container">
                    <h2>Popular { type === 'home' ? 'Titles' : type }</h2>
                </div>
            </div>
        </Fragment>
    
    );
};

export default Header;
