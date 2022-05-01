import React, { useState } from 'react';

import './TodoForm.scss';

export default function TodoForm(props) {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [date, setDate] = useState(new Date());

  const setTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const setDetailsHandler = (event) => {
    setDetails(event.target.value);
  };

  const setDateHandler = (event) => {
    setDate(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    const formData = {
      id: Math.random(),
      title: title,
      details: details,
      date: new Date(date),
    };
    props.onAddNewList(formData);
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setDetails('');
    setDate(new Date());
  };

  return (
    <div className="todo-form-wrapper">
      <form className="todo-form" onSubmit={submitForm}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            placeholder="Enter the title"
            onChange={setTitleHandler}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="details">Details:</label>
          <input
            id="details"
            type="text"
            placeholder="Enter the details"
            onChange={setDetailsHandler}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="date">Due Date:</label>
          <input id="dueDate" type="date" placeholder="text" onChange={setDateHandler}></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
