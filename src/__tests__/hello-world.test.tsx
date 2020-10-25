import "@testing-library/jest-dom";

import * as React from "react";

import { RenderResult, render } from "@testing-library/react";

import { HelloWorld } from "../hello-world";

let documentBody: RenderResult;

describe("Hello World", () => {
  it("should work", () => {
    documentBody = render(<HelloWorld />);
    expect(documentBody.getByText("Hello World")).toBeInTheDocument();
  });

  // Uncommment to see type checking working
  //   it("should fail type check", () => {
  //     const value: number = "Hello world";
  //     expect(value).toEqual(5);
  //   });
});
