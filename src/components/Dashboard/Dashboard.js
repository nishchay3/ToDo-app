import React, { useState } from 'react';

import './Dashboard.scss';

import TodoCalendar from './TodoCalendar/TodoCalendar';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';

const listDataArray = [
  {
    id: 1,
    title: 'Dummy Todo List',
    details: 'This is a dummy todo list just for reference',
    date: new Date(),
  },
];

export default function Dashboard() {
  const [listData, setListData] = useState(listDataArray);

  const addNewList = (newListData) => {
    setListData((prevTodoList) => {
      return [newListData, ...prevTodoList];
    });
  };

  return (
    <div className="dashboard-wrapper">
      <TodoForm onAddNewList={addNewList} />
      <div className="row">
        <TodoList listData={listData} />
        <TodoCalendar />
      </div>
    </div>
  );
}
