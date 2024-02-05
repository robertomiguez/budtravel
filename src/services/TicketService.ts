import type { Ticket } from '@/types/Ticket';

class TicketService {
  static async getTickets(): Promise<Ticket[]> {
    const url = import.meta.env.VITE_HOST_ADDRESS_LOCAL;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_TOKEN_LOCAL}`,
      },
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const { tickets } = await response.json();
    return tickets;
  }

  static async getTicketsById(id: string): Promise<Ticket[]> {
    const url = `${import.meta.env.VITE_HOST_ADDRESS_LOCAL}/id/${id}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_TOKEN_LOCAL}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }

  static async getTicketsByIata(iata: string): Promise<Ticket[]> {
    const url = `${import.meta.env.VITE_HOST_ADDRESS_LOCAL}/iata/${iata}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_TOKEN_LOCAL}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }
}

export default TicketService;
