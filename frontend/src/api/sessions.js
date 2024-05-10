import axios from "axios";

const sessions = axios.create({
  baseURL: "/api",
});

export const createSession = async (data) => {
  try {
    const response = await sessions.post("/chat", null, {
      headers: {
        Authorization: `Bearer ${data.jwt}`,
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
  }
};

export const getSessions = async (data) => {
  try {
    const response = await sessions.get("/chat", {
      headers: {
        Authorization: `Bearer ${data.jwt}`,
      },
    });

    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
  }
};

export const registerAccount = async (data) => {
  try {
    const response = await sessions.post("/account/register", data);

    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const loginAccount = async (data, updateUsername, updateJWT) => {
  try {
    const response = await sessions.post("/account/login", data);
    const { username, token } = response.data;
    updateUsername(username);
    updateJWT(token);
    return { status: response.statusText, statusCode: response.status };
  } catch (e) {
    console.log(e);
  }
};

export const signOut = async (data) => {
  try {
    const response = await sessions.post("/account/signout", null, {
      headers: {
        Authorization: `Bearer ${data.jwt}`,
      },
    });
    localStorage.clear();
    if (response.status === 200) {
      return { status: response.statusText, statusCode: response.status };
    }
  } catch (e) {
    console.log(e);
  }
};
