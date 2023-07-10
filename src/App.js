import ToDoApp from "./components/ToDoApp";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ToDoApp />
      <Form />
    </div>
  );
}

export default App;
