import React from 'react';

const TodoFilter = ({ activeFilter, onFilterChange }) => (
  <ul className="filters">
    {['all', 'active', 'completed'].map(filter => (
      <li key={filter}>
        <a
          href={`#/${filter === 'all' ? '' : filter}`}
          className={activeFilter === filter ? 'selected' : ''}
          onClick={() => onFilterChange(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </a>
      </li>
    ))}
  </ul>
);

export default TodoFilter;