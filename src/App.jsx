import './App.css';
import ChatEntry from './components/ChatEntry';
import data from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry 
          id={data[0].id}
          sender={data[0].sender}
          body={data[0].body}
          timeStamp={data[0].timeStamp}
          liked={data[0].liked}
        />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
