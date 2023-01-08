import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("prueba para el custom hook useFetchGifs", () => {
  test("debe de devolver el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("Dragon Ball"));
    console.log(result);
    const { images, isLoading } = result.current;

    expect(images).toEqual([]);
    expect(images.length).toBe(0);
    expect(isLoading).toBe(true);
  });

  test("debe de devolver un arreglo de imagenes y el isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("Dragon Ball"));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
