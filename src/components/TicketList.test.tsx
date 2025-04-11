import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import TicketList from "./TicketList";

vi.mock("../services/api", () => ({
  api: {
    getTickets: vi.fn().mockResolvedValue([
      {
        _id: "1",
        customerName: "John Doe",
        email: "john.doe@example.com",
        status: "open",
        createdAt: "2025-04-10T10:00:00Z",
      },
    ]),
  },
}));

test("renders Onboarding Tickets heading", () => {
  render(
    <MemoryRouter>
      <TicketList />
    </MemoryRouter>
  );
  const heading = screen.getByText(/Onboarding Tickets/i);
  expect(heading).toBeInTheDocument();
});

test("renders a ticket row", async () => {
  render(
    <MemoryRouter>
      <TicketList />
    </MemoryRouter>
  );
  const ticketRow = await screen.findByText("John Doe");
  expect(ticketRow).toBeInTheDocument();
});
