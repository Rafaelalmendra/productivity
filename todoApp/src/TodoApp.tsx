import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

// components
import { Header } from "host/Header";
import { Footer } from "host/Footer";

const TodoApp = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setItems(data);
    };

    fetchData();
  }, []);

  console.log(items);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />

      <div>
        <h1 className="text-5xl font-bold">Home - Hello World</h1>

        <div>
          {items.map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

ReactDOM.render(<TodoApp />, document.getElementById("app"));
