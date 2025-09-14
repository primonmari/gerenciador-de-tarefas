import { useState } from "react";
import Input from "./Input";

export default function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title} //valor do input
        onChange={(event) => setTitle(event.target.value)} //função que atualiza o valor do input
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description} //valor do input
        onChange={(event) => setDescription(event.target.value)} //função que atualiza o valor do input
      />
      <button
        onClick={() => {
          //validação dos campos, trim remove espaços em branco
          if (!title.trim() || !description.trim()) {
            return alert("Por favor, preencha todos os campos");
          }
          //chama a função que adiciona a tarefa no state do App.jsx
          onAddTaskSubmit(title, description);
          //limpa os campos
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 px-4 py-2 rounded-md text-white"
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}
