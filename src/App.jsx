import './App.css';
import ChatLog from './components/ChatLog';
import data from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={data}/>
      </main>
    </div>
  );
};

export default App;
