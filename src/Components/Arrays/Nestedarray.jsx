import React from 'react';
import { userdata } from '../../data';
const NestedArray = () => {
  return (
    <table className="nested-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Street</th>
          <th>Suite</th>
          <th>Zipcode</th>
          <th>Latitude</th>
          <th>Longitude</th>
        </tr>
      </thead>
      <tbody>
        {userdata.map(({ id, name, username, email, address: { street, suite, zipcode, geo: { lat, lng } } }) => (
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{street}</td>
            <td>{suite}</td>
            <td>{zipcode}</td>
            <td>{lat}</td>
            <td>{lng}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NestedArray;
