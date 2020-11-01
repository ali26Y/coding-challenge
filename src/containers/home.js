import React, { Fragment } from 'react';
import { css } from 'emotion'

import Header from '../components/header';
import Footer from '../components/footer';
import Movies from '../components/movies';

const data = [
    {
        title: 'Series',
        description: 'Popular Series',
    },
    {
        title: 'Movies',
        description: 'Popular Movies',
    }
];

const HomePage = () => {
    return (
        <Fragment>
            <Header type="home" />
            <div className="container">
                <div className={css`
                    margin-top: 1em;
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(12em, 1fr));
                    grid-gap: 1em;
                    @media only screen and (max-width: 480px) {
                        display: flex;
                        flex-flow: row wrap;
                        align-content: space-between;
                        justify-content: space-between;
                    }
                `}>
                    <Movies data={data} />
                </div>
                <div className={css`margin-bottom: 10em;`}></div>
            </div>
            <Footer />
        </Fragment>
        
    )
};

export default HomePage;
