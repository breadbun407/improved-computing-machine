function Home() {
    return (
        <div className="container">
            <h1>Welcome to My Music</h1>
            <section>
                <h2>Latest Singles</h2>
                <div>Check out my latest song, Breaking Point, available on all streaming platforms!</div>
            </section>
            <section>
                <h2>Spotify Player</h2>
                <iframe
                    style={{ borderRadius: '12px' }}
                    src="https://open.spotify.com/embed/artist/66PPP1Zp5cTWEerszKBlDs?utm_source=generator"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
                </iframe>
            </section>
            <section>
                <h2>Twitter Feed</h2>
                {/* Add Twitter widget code here */}
            </section>
        </div>
    );
}

export default Home;
