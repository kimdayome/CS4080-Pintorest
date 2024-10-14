// Playlists.js

import React from "react";
import './Playlists.css';

function Playlists() {
    return (
        <section class="playlists-main">
            <h2 className="section-title">Add-ons</h2>
            <div className="playlists">
            <div className="playlist">
                <img className="playlist-thumb" src="/images/kendric1.png"  alt="album cover"/>
                <div className="playlist-title">Not Like Us</div>
                <div className="playlist-artist">Kendric Lamar</div>
            </div>
            <div className="playlist">
                <img className="playlist-thumb" src="/images/kendric2.png"  alt="album cover"/>
                <div className="playlist-title">Money Trees</div>
                <div className="playlist-artist">Kendric Lamar</div>
            </div>
            <div className="playlist">
                <img className="playlist-thumb" src="/images/kendric3.png"  alt="album cover"/>
                <div className="playlist-title">Like That</div>
                <div className="playlist-artist">Kendric Lamar</div>
            </div>
            <div className="playlist">
                <img className="playlist-thumb" src="/images/kendric4.png"  alt="album cover"/>
                <div className="playlist-title">LOVE.</div>
                <div className="playlist-artist">Kendric Lamar</div>
            </div>
            <div className="playlist">
                <img className="playlist-thumb" src="/images/kendric5.jpg"  alt="album cover"/>
                <div className="playlist-title">Euphoria</div>
                <div className="playlist-artist">Kendric Lamar</div>
            </div>
            <div className="playlist">
                <img className="playlist-thumb" src="/images/kendric1.png"  alt="album cover"/>
                <div className="playlist-title">HUMBLE.</div>
                <div className="playlist-artist">Kendric Lamar</div>
            </div>
            <div className="playlist">
                <img className="playlist-thumb" src="/images/kendric2.png"  alt="album cover"/>
                <div className="playlist-title">LOVE.</div>
                <div className="playlist-artist">Kendric Lamar</div>
            </div>
            <div className="playlist">
                <img className="playlist-thumb" src="/images/kendric3.png"  alt="album cover"/>
                <div className="playlist-title">Euphoria</div>
                <div className="playlist-artist">Kendric Lamar</div>
            </div>
            <div className="playlist">
                <img className="playlist-thumb" src="/images/kendric4.png"  alt="album cover"/>
                <div className="playlist-title">HUMBLE.</div>
                <div className="playlist-artist">Kendric Lamar</div>
            </div>
            </div>
        </section>
    );
}

export default Playlists;