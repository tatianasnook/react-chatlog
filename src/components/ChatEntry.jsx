import './ChatEntry.css';


const ChatEntry = ({ data }) => {
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{data[0].sender}</h2>
      <section className="entry-bubble">
        <p>{data[0].body}</p>
        <p className="entry-time">{data[0].timeStamp}</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  // Fill with correct proptypes
};

export default ChatEntry;
