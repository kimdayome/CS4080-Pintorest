import React from 'react';
import './App.css'
import Sidebar from './components/Sidebar';
import Topmain from './components/Topmain';
import Playlists from './components/Playlists';
import Player from './components/Player'

function App() { // App component itself, which returns JSX (the js code where allows you to use html tags)
    // Therefore, wherever you see <App />, it refers to rendering wherever is retuned by function App()
    // The div className is a part of JSX returned by the App component. dont get confused!
    return (
        <div className="App"> 
            <Sidebar />
        <main>
            <Topmain />
            <Playlists />
            <Player />
        </main>
        </div>
    );
}

export default App; // means you are exporting the App components as the default export of the APP.js file :)
// That is why it allows other files to import the APP component and use it as './App'