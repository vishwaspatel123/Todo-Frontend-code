export const additem = async (task, date) => {
  const response = await fetch(
    "https://todo-backend-code.onrender.com/api/todo",
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
  );
  if (!response.ok) {
    throw new Error("Failed to fetch item");
  }
  const todoitems = await response.json();
  return todoitems;
};

export const deleteitem = async (id) => {
  const response = await fetch(
    "https://todo-backend-code.onrender.com/api/todo",
    {
      method: "DELETE",
    }
  );
  return response.json({ id });
};
