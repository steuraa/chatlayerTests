import React from "react";
import "./App.css";
import ChatbotContainer from "./ChatbotContainer";
// import ApolloClient from "apollo-boost";

// const client = new ApolloClient({
//   uri: "localhost:3000",
// });

const App = () => {
  return (
    <div className="App">
      <ChatbotContainer></ChatbotContainer>
    </div>
  );
};

export default App;
