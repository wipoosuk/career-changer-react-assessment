import Layout from "./Layout";
import User from "./User";
import Admin from "./Admin";
import { useState } from "react";

const cardStyles = {
  container: {
    margin: "auto",
    width: "100%",
    height: "100%",
    flexdirection: "column",
    justifyitems: "center",
  },
  button: {
    display: 'inline-block',
    justifyitem: 'space-between',
    backgroundColor: "white",
    color: "black",
    height: 50,
    width: 150,
    borderRadius: "10%",
    padding: 10,

  }
};

const Home = () => {
  const [sector, setSector] = useState();

  if (sector === "admin") {
    return (
        <Admin />
    );
  } else if (sector === "user") {
    return (
        <User />
    );
  };

  return (
    <Layout>
      <div style={{textAlign: "center"}}>
        <h1>Generation Thailand</h1>
        <h1>React - Assessment</h1>
        <button onClick={() => setSector("user")}>User Home Sector</button>
        <button onClick={() => setSector("admin")}>Admin Home Sector</button>
      </div>
    </Layout>
  );
};

export default Home;
