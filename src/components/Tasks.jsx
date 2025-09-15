import { CheckIcon, ChevronRight, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Tasks({ tasks, onTaskClick, onTaskDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    // query.set("isCompleted", task.isCompleted)
    navigate(`/task?${query.toString()}`);
  }
  return (
    <div>
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-slate-400 w-full flex items-center gap-2 text-white p-2 rounded-md ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.isCompleted && <CheckIcon />}
              {task.title}
              {/* {task.isCompleted ? "COMPLETE" : "INCOMPLETE"} */}
            </button>
            <Button onClick={() => onSeeDetailsClick(task)}>
              <ChevronRight />
            </Button>

            <Button onClick={() => onTaskDeleteTaskClick(task.id)}>
              <TrashIcon />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
