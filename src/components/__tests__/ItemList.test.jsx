// src/components/__tests__/ItemList.test.jsx
import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import ItemList from "../ItemList";
import { test, expect } from "vitest";

test("renders projects and filters by search", async () => {
  render(
    <MemoryRouter>
      <ItemList />
    </MemoryRouter>
  );
  await waitForElementToBeRemoved(() => screen.queryByRole("status"));
  const input = screen.getByRole("textbox", { name: /search projects/i });
  expect(input).toBeTruthy();
  const user = userEvent.setup();
  await user.type(input, "Third");

  //find
  const alpha = await screen.findByText(/Third project/i);
  expect(alpha).toBeTruthy();

  //not find
  const beta = screen.queryByText(/First Project/i);
  expect(beta).toBeNull();
});
