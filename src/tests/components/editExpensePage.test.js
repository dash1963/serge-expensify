import React from 'react';
import {shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { editExpensePage } from '../../components/EditExpensePage';

let editExpense , removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn()};
    wrapper = shallow (
        <editExpensePage 
           editExpense   = {editExpense}
           removeExpense = {removeExpense}
           history       = {history}
           expense       = {expenses[0]}
        />
    );
});

test('Should render editExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should handle edit expense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);

   expect(history.push).toHaveBeenLastCalledWith('/');
   expect(editExpense).toHaveBeenLastCalledWith(
          expenses[0].id , expenses[0]
         );
});

test('Shound handle remove expense', () => {
   wrapper.find('button').simulate('click');

   expect(history.push).toHaveBeenLastCalledWith('/');

   expect(removeExpense).toHaveBeenLastCalledWith({
          id: expenses[0].id});
});
