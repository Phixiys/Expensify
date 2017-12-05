import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenselistFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenselistFilters/>
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
