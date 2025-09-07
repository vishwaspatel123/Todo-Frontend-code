export const additem = async (task, date) => {
  const response = await fetch(
    "https://todo-backend-code.onrender.com/api/todo",
    // "http://localhost:3000/api/todo",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task, date }),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to add item");
  }
  return response.json();
};

export const getitem = async () => {
  const response = await fetch(
    "https://todo-backend-code.onrender.com/api/todo"
    // "http://localhost:3000/api/todo"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch item");
  }
  const todoitems = await response.json();
  return todoitems;
};

export const deleteitem = async (id) => {
  const response = await fetch(
    `https://todo-backend-code.onrender.com/api/todo/${id}`,
    // `http://localhost:3000/api/todo/${id}`,
    {
      method: "DELETE",
    }
  );
  return response.json();
};

export const completeditem = async (id, complete) => {
  const response = await fetch(
    `https://todo-backend-code.onrender.com/api/todo/${id}/complete`,
    // `http://localhost:3000/api/todo/${id}/complete`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: complete }),
    }
  );
  return response.json();
};

export const gettask = async (id) => {
  const response = await fetch(
    `https://todo-backend-code.onrender.com/api/todo/${id}`
    // `http://localhost:3000/api/todo/${id}`
  );
  return response.json();
};

export const updateitem = async (id, task, date) => {
  const response = await fetch(
    `https://todo-backend-code.onrender.com/api/todo/${id}/editing`,
    // `http://localhost:3000/api/todo/${id}/editing`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task, date }),
    }
  );
  return response.json();
};
