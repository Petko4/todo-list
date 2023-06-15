import "./App.css";
import TextInput from "./components/TextInput/TextInput";
import useLocalStorage from "./hooks/useLocalStorage";
import { Task } from "./types/interfaces";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("todo-list", []);

  const addNewTask = (value: string): void => {
    const newTask: Task = {
      id: uuidv4(),
      text: value,
      isChecked: false,
    };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id: string): void => {
    setTasks((prevState: Task[]) =>
      prevState.filter((task: Task) => task.id !== id)
    );
  };

  // const changeTaskIsChecked = (id: string): void => {
  //   setTasks((prevState: Task[]) => {
  //     const updatedTasks = [...prevState];
  //     const foundTask = updatedTasks.find((task: Task) => task.id === id);

  //     if (foundTask) {
  //       foundTask.isChecked = !foundTask.isChecked;
  //     }
  //     return updatedTasks;
  //   });
  // };

  return (
    <div className="App">
      <TextInput onSubmit={addNewTask} />
      {/* TEST of localstorage */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id} onClick={() => removeTask(task.id)}>
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
