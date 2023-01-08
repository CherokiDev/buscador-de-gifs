import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en el componente GifItem", () => {
  const title = "Un título";
  const url = "https://localhost/algo.jpg";

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("Debe de mostrar el título en el componente", () => {
    render(<GifItem title={title} url={url} />);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeTruthy();
  });
});
