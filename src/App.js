import './App.css';
import './style.css'
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
  const [record, setRecord] = useState([]);
  const [datarecord, setRecordData] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/comments`)
      .then((res) => res.json())
      .then((data) => setRecord(data.comments))
      .catch((err) => {
        console.log(err);
        return false;
      });
  }, []);


  useEffect(() => {
    axios.get(`https://dummyjson.com/users`)
      .then((res) => {
        // Update the datarecord state with the retrieved data
        setRecordData(res.data.users);
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1 style={{ color: 'darkblue' }}>Fetch Api</h1>
        <table className="table table-light table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>body</th>
              <th>postId</th>
            </tr>
          </thead>
          <tbody>
            {record.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.body}</td>
                <td>{data.postId}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />

        <h1 style={{ color: 'darkblue' }}>Axios Api</h1>
        <table className="table table-smooth table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>firstName</th>
              <th>lastName</th>
              <th>maidenName</th>
              <th>age</th>
              <th>gender</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {datarecord.map((val) => (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.firstName}</td>
                <td>{val.lastName}</td>
                <td>{val.maidenName}</td>
                <td>{val.age}</td>
                <td>{val.gender}</td>
                <td>{val.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default App;
