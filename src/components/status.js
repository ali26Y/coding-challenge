import React from 'react';
import { css } from 'emotion'

const StatusWrapper = ({ show, status }) => (
    <div className="container details-wrapper">
        {show && <div className={css`
            height: 50vh;
            & p { 
                margin: 2em 0;
            }
        `}><p>{status}</p></div>}
    </div>
);

export default StatusWrapper;
