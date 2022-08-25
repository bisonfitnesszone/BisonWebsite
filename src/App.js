import bisonLogo from './assets/bison-logo.png';
import bisonText from './assets/bison-text.png';
import fitZoneText from './assets/fitness-zone-text.png';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={bisonLogo} className="App-logo" alt="bisonLogo"/>
                <img src={bisonText} className="App-logo" alt="bisonText"/>
                <img src={fitZoneText} className="App-logo" alt="logo"/>
                <p>
                    Bison Fitness Zone Website !!
                </p>
                <p>
                    COMING SOON !!
                </p>
            </header>
        </div>
    );
}

export default App;
