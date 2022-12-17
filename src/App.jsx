import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const App = () => {
  const [categories, setCategories] = useState([""]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
    // setCategories((cat) => [newCategory, ...categories]);
  };

  return (
    <>
      <h1>Buscador de Gifs (prueba)</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
