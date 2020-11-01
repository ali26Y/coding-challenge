import React, { Fragment } from "react";
import { useLocation } from 'wouter';
import { css } from 'emotion'

import useSearchMovie from '../hooks/searchMovie'
import Header from '../components/header';
import Footer from '../components/footer';
import Movies from '../components/movies';
import Status from '../components/status';

const DetailsPage = () => {
    const [ location ] = useLocation();
    const type = location.replace('/', '').toLowerCase();
    const { searchResults, loading, error } = useSearchMovie(type);

    return (
        <Fragment>
            <Header type={type} />
            <Status status={'loading...'} show={loading} />
            <Status status={'oops, something went wrong...'} show={error} />
            <div className="container">
                <div className={css`
                    margin: 3em 0 3em 0;
                    display: flex;
                    flex-flow: row wrap;
                    align-content: space-between;
                    justify-content: space-between;
                `}>
                    { searchResults && searchResults.length && <Movies data={searchResults} /> }
                </div>
            </div>
            <Footer />
        </Fragment>
    )
};

export default DetailsPage;
