import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import mockFetchColors from"../components/fetchColor"

jest.mock("../components/fetchColor")


const testData = {
  data: [
  {color: "aliceblue", code: {hex: "#f0f8ff"}, id: 1},
  {color: "limegreen", code: {hex: "#99ddbc"}, id: 2},
  {color: "aqua", code: {hex: "#00ffff"}, id: 3},
  {color: "aquamarine", code: {hex: "#7fffd4"}, id: 4},
  {color: "lilac", code: {hex: "#9a99dd"}, id: 5},
  {color: "softpink", code: {hex: "#dd99ba"}, id: 6},
  {color: "bisque", code: {hex: "#dd9a99"}, id: 7},
  {color: "softyellow", code: {hex: "#dcdd99"}, id: 8},
  {color: "blanchedalmond", code: {hex: "#ffebcd"}, id: 9},
  {color: "blue", code: {hex: "#6093ca"}, id: 10},
  {color: "blueviolet", code: {hex: "#8a2be2"}, id: 11},
]
}


test("Renders BubblePage without errors", () => {
  render(<BubblePage/>)
});



test("Fetches data and renders the bubbles on mounting",  async () => {
  mockFetchColors.mockResolvedValueOnce(testData)
  render(<BubblePage />)
  const color =  screen.findByTestId(/l123/i)
  expect(color)
  console.log(color)


});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading