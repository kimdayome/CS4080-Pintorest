// Topmain.js

import React from "react";
import './Topmain.css';

function Topmain() {
    return (
        <section class="topmain-main">
           <div className="topmain">
                <img className="topmain-thumb" src="/images/main.jpg" alt="Top" />
                <div className="topmain-content">
                    <div class="topmain-tag">Today's pick</div>
                    <h2 className="topmain-title">
                        Good Morning<br />
                        How's your feeling?
                    </h2>
                    <p className="topmain-description">
                        Hi, This is Dayoung and Jessica's amazing web-app. hope you enjoy! Mary realized if her calculator had a history, it would be more embarrassing than her computer browser history.
                        Mary realized if her calculator had a history, it would be more embarrassing than her computer browser history.

                    </p>
                </div>
           </div>
        </section>
    );
}

export default Topmain;