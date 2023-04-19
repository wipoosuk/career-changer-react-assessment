import Layout from "./Layout";
import Admin from "./Admin";
import { useState } from "react";
import { useEffect } from "react";


const User = () => {
  const [sector, setSector] = useState();

  const [employees, setEmployee] = useState([
    {
      id: 0,
      name: "mock",
      lastname: "mocklastname",
      position: "Manager",
    },
    {
      id: 1,
      name: "employee 1",
      lastname: "em",
      position: "Engineer",
    },
    {
      id: 2,
      name: "employee 2",
      lastname: "lord",
      position: "Designer",
    }
]);

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
        <h1>Home - User Sector</h1>
        <button onClick={() => setSector("user")}>User Home Sector</button>
        <button onClick={() => setSector("admin")}>Admin Home Sector</button>
        <table style={{margin: "auto", bordercollapse: "collapse"}}>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
          {employees.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.position}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </Layout>
  );
};

export default User;
