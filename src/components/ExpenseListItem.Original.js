
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';


const ExpenseListItem = ( {dispatch, id, description, amount, createdAt} = {}) => (
    <div className="container">
       <table className="table table-striped">
          <tbody>
         <tr>
            <td><Link to={`/edit/${id}`}>{description}</Link></td>
            <td>{amount}</td>
            <td>{createdAt}</td>
            <td><button onClick={() => {
                        dispatch(removeExpense({id}));  
                    }}>remove
                </button></td>
          </tr>
          </tbody>
       </table>              


    </div>
);


const mapStateToProps = (state) => {
    return {
         expenses: state.expenses
    };
}
export default connect()(ExpenseListItem);



