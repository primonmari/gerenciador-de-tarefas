import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // {
  //   id: 1,
  //   title: "Estudar React",
  //   description: "Estudar boas práticas de React",
  //   isCompleted: false,
  // },
  // {
  //   id: 2,
  //   title: "Praticar Tailwind CSS",
  //   description: "Criar um layout usando Tailwind CSS",
  //   isCompleted: false,
  // },
  // {
  //   id: 3,
  //   title: "Construir um projeto",
  //   description: "Construir um projeto completo usando React e Tailwind CSS",
  //   isCompleted: false,
  // },

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    // const fetchTasks = async () => {
    //   //Chamada API com JSONPLACEHOLDER
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/todos?_limit=10",
    //     {
    //       method: "GET",
    //     }
    //   );
    //   //PEGAR OS DADOS QUE ELA RETORNA
    //   const data = await response.json();
    //   // ARMAZENAR, PERSISTIR NO STATE
    //   //posso chamar uma api para pegar as tarefas com setTasks(data);
    //   // setTasks(data);
    // };
    // fetchTasks();
  }, []); //quando passo lista vazia ele executa apenas uma vez

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // preciso atualizar essa tarefa
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      // não preciso atualizar essa tarefa
      return task;
    });

    setTasks(newTasks);
  }

  //DELETA TAREFA DO STATE

  function onTaskDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  //ADICIONA TAREFA
  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4, //gera um id único uuuid()
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        {/* <Test /> // Está caindo em desuso, não consigo usrar hooks*/} 
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskDeleteTaskClick={onTaskDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
