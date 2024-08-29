/* eslint-disable no-unused-vars */
// components/Home.js
import React from 'react';

function Home() {
    return (
        <div className="container">
            <h1>Welcome to My Music</h1>
            <section>
                <h2>Latest Singles</h2>
                {/* Add your singles list here */}
            </section>
            <section>
                <h2>Spotify Player</h2>
                {/* Add Spotify embed code here */}
            </section>
            <section>
                <h2>Twitter Feed</h2>
                {/* Add Twitter widget code here */}
            </section>
        </div>
    );
}

export default Home;