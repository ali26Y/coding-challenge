import React, { Fragment } from 'react';
import { css, cx } from 'emotion'
import { useLocation } from "wouter";
import PlaceHolder from '../assets/placeholder.png'

const imgClass = (type, info) => type ? `background-image: url(${info.images['Poster Art'].url}); background-size: cover;` : 'background-color: #292929;';

const Movies = ({ data }) => {
    const [location, setLocation] = useLocation();
    const type = location.replace('/', '');

    const viewLink = info => {
        if (!type) {
            setLocation(`/${info.title}`)
        }
    }

    return data.map(info => (
            <div 
                key={info.title}
                onClick={() => viewLink(info)} 
                className={css`
                    display: inline-block; 
                    margin-top: 2em; cursor: 
                    pointer; width: 13em;
                    @media only screen and (max-width: 480px) {
                        margin: 1em auto;
                        width: 14em;
                    }
            `}>
                <div className={css`
                    height: 19em; ${imgClass(type, info)}
                    @media only screen and (max-width: 480px) {
                        height: 21em;
                    }
                `}>
                    {
                        !type && (
                            <Fragment>
                                <img src={PlaceHolder} className={css`display: inherit; width: 21em; margin-left: -4em; position: relative; top: 3em;`} />
                                <p className={css`
                                    text-align: center;
                                    color: #ffffff;
                                    text-transform: uppercase;
                                    font-weight: bold;
                                    font-size 1.8em;
                                    display: block;
                                    margin: 0;
                                    margin-top: -2.5em;`
                                }>{info.title}</p>
                            </Fragment>
                        )
                    }
                </div>
                <h4 className={css`color: rgba(0, 0, 0, 0.8); font-weight: normal; font-size: 0.9em`}>Popular {info.title}</h4>
            </div>
        ));
}

export default Movies;
