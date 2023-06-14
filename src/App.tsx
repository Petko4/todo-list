import "./App.css";
import TextInput from "./components/TextInput/TextInput";

function App() {
  const handleInputOnSubmit = (value: string): void => {
    console.log(value);
  };
  return (
    <div className="App">
      <TextInput onSubmit={handleInputOnSubmit} />
    </div>
  );
}

export default App;
