
import React from 'react';
import { Link } from 'react-router-dom';


const ExpenseListItem = ( {dispatch, id, description, amount, createdAt} = {}) => (
    <div className="container">
       <table className="table table-striped">
          <tbody>
         <tr>
            <td><Link to={`/edit/${id}`}>{description}</Link></td>
            <td>{amount}</td>
            <td>{createdAt}</td>
          </tr>
          </tbody>
       </table>              


    </div>
);

export default ExpenseListItem;



