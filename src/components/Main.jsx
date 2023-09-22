import React from 'react';
import { ClarifionLogo, McAfee, Norton } from './Icons';
import './Main.css';
import Purchase from './Purchase';


const Main = () => {
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <ClarifionLogo />
                    <McAfee />
                    <Norton />
                </div>
            </div>
            <div className="textCentral">
                <h1>Wait ! Your Order In Progress.</h1>
                <h3>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing</h3>
            </div>
        </div>
        <Purchase/>
        </>
    );
};

export default Main;





