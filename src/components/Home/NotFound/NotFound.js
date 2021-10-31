import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notfound-container">
            <div className="pt-5">
                <h1 className="fw-bolder pt-5 ">404</h1>
                <h3 className="fw-bolder">Page Not</h3>
                <h2 className="fw-bolder">Found</h2>
                <br />
                <h5>The page you were looking for could not be found.</h5>
                <h5>It might have been removed, renamed, or did not exist in the first place.
                </h5>
            </div>
        </div>
    );
};

export default NotFound;

