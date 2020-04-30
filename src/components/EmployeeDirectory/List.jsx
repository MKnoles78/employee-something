import React from "react";
import Item from "./Item";

const List = (props) => {
  return (
    <div className="container">
      <div className="row">
        <h1>You have {props.employees.length} employees.</h1>
      </div>
      <div className="row">
        <div className="col">
          <ul>
            {props.employees.map((employee) => (
              <Item name={employee.employee_name}/>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default List;