import axios from 'axios';

export async function createTicket(ticket: any) {
    try {
      const createdTicket = await axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/tickets',
        data: ticket,
      });
      return createdTicket.data.client;
    } catch (e) {
      return e;
    }
  }