import axios from 'axios';

export async function getUsers() {
  try {
    const users = await axios({
      method: 'get',
      url: 'http://127.0.0.1:8000/api/clients',
      responseType: 'json',
    });
    return users.data;
  } catch (e) {
    return e;
  }
}

export async function getUser(userId: number) {
  try {
    const users = await axios({
      method: 'get',
      url: `http://127.0.0.1:8000/api/clients/${userId}`,
      responseType: 'json',
    });
    return users.data;
  } catch (e) {
    return e;
  }
}

export async function createUser(user: any) {
  try {
    const createdUser = await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/clients',
      data: user,
    });
    return createdUser.data.client;
  } catch (e) {
    return e;
  }
}
