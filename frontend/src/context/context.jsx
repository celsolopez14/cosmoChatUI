import React from "react";

const MyContext = React.createContext();

const MyContextProvider = ({ children }) => {
  const [chatSessions, setChatSessions] = React.useState([]);
  const [jwt, setJWT] = React.useState("");
  const [username, setUsername] = React.useState("");

  const updateChatSessions = (data) => {
    setChatSessions(data);
  };

  const updateJWT = (data) => {
    setJWT(data);
  };

  const updateUsername = (data) => {
    setUsername(data);
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
