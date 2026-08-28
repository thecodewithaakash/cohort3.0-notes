const http = require("http");

const PORT = process.env.PORT || 8000;

let todos = []; // in-place

const getAllTodos = (res) => {
  res.end(JSON.stringify(todos));
};

const addTodos = (todo) => {
  console.log(todo);
  todos.push(JSON.parse(todo));
};

const deleteTodos = (id) => {
  if (!id) return;

  todos = todos.filter((todo) => todo.id !== Number(id));
};

// const updateTodos = (todo) => {
//   todo = JSON.parse(todo);
//   todos = todos.map((item) => {
//     if (item.id === todo.id) {
//       item = todo;
//     }
//     return item;
//   });
// };

const updateTodos = (todo) => {
  todo = JSON.parse(todo);

  todos = todos.map((item) => {
    if (item.id === todo.id) {
      return todo;
    }

    return item;
  });
};

let server = http.createServer((req, res) => {
  res.writeHead(200, {
    "content-type": "application/json",
  });

  if (req.method === "GET") {
    getAllTodos(res);
  } else if (req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      //   console.log(body);
      addTodos(body);
      res.end("Received");
    });
  } else if (req.method === "DELETE") {
    let url = new URL(req.url, `http://${req.headers.host}`);
    const id = url.searchParams.get("id");
    // console.log(id);
    deleteTodos(id);
    res.end(id);
  } else if (req.method === "PUT") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      updateTodos(body);
      res.end("Received");
    });
  } else {
    res.end("Something else");
  }
});

server.listen(PORT, () =>
  console.log(`server listening on http://localhost:${PORT}`),
);
