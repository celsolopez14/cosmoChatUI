import React from "react";

const MyContext = React.createContext();

const MyContextProvider = ({ children }) => {
  const [chatSessions, setChatSessions] = React.useState([]);
  const [jwt, setJWT] = React.useState("");
  const [username, setUsername] = React.useState("");

  React.useEffect(() => {
    const usernameLocal = localStorage.getItem("username");
    const jwtLocal = localStorage.getItem("jwt");
    if(usernameLocal) setUsername(usernameLocal);
    if(jwtLocal) setJWT(jwtLocal);

  }, []);

  const updateChatSessions = (data) => {
    setChatSessions(data);
  };

  const updateJWT = (data) => {
    setJWT(data);
    localStorage.setItem("jwt", data);
  };

  const updateUsername = (data) => {
    setUsername(data);
    localStorage.setItem("username", data);
  };

  return (
    <MyContext.Provider
      value={{ updateChatSessions, updateJWT, updateUsername, chatSessions, jwt, username }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
