import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <input placeholder="Search" className="search-bar" />
      <div>
        <button className="read-btn">Read More</button>
        <button className="delete-btn">Delete </button>
        <button className="edit-btn">Edit </button>
      </div>
    </div>
  );
}
