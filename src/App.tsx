import "./App.css";
import { TaskItem } from "./components/TaskItem/TaskItem";
import TaskList from "./components/TaskList/TaskList";
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

  const changeTaskIsChecked = (id: string): void => {
    setTasks((prevState: Task[]) => {
      const updatedTasks = [...prevState];
      const foundTask = updatedTasks.find((task: Task) => task.id === id);

      if (foundTask) {
        foundTask.isChecked = !foundTask.isChecked;
      }
      return updatedTasks;
    });
  };

  return (
    <div className="App">
      <TextInput onSubmit={addNewTask} />
      <TaskList>
        {tasks.map((task) => (
          <TaskItem
            removeItem={removeTask}
            checkItem={changeTaskIsChecked}
            key={task.id}
            {...task}
          />
        ))}
      </TaskList>
    </div>
  );
}

export default App;
