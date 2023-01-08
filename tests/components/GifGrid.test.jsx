import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("pruebas en el componente GifGrid", () => {
  const category = "Dragon Ball";

  test("debe de mostrar el loading al iniciar ", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("Loading..."));
    expect(screen.getByText(category));
  });

  test("debe de mostrar items cuando se cargan imagenes useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://localhost/cualquier/cosa.jpg",
        title: "Dragon Ball",
      },
      {
        id: "123",
        url: "https://localhost/cualquier/cosa.jpg",
        title: "Pokemon",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    screen.debug();
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
