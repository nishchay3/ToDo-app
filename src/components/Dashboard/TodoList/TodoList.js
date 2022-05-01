import React from 'react';

import './TodoList.scss';

import ListItem from './ListItem/ListItem';

export default function TodoList(props) {
  if (props.listData.length === 0) {
    return <h3>No items to show</h3>;
  }

  return (
    <div className="todo-list-wrapper">
      {props.listData.map((listItem) => (
        <ListItem
          key={listItem.id}
          title={listItem.title}
          details={listItem.details}
          date={listItem.date}
        />
      ))}
    </div>
  );
}
