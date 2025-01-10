import React from 'react';
import { render, screen } from '@testing-library/react';
import Todo from './Todo';
import userEvent from '@testing-library/user-event';

describe('Todo Component', () => {
  test('renders an uncompleted Todo component', () => {

    const mockDeleteTodo = jest.fn();
    const mockCompleteTodo = jest.fn();
    render(<Todo 
      todo={{
      _id: '1099883',
      text: 'my todo',
      done: false
    }} onClickDelete={mockDeleteTodo}
      onClickComplete={mockCompleteTodo}
    />);

    const completeButton = screen.queryByRole('button', { name: 'Set as done'});
    const deleteButton = screen.queryByRole('button', { name: 'Delete'});

    expect(screen.getByText('my todo')).toBeInTheDocument();
    expect(screen.getByText('This todo is not done')).toBeInTheDocument();
  
    expect(deleteButton).toBeInTheDocument();
    expect(completeButton).toBeInTheDocument();

  });

  test('renders an completed Todo component', () => {

    const mockDeleteTodo = jest.fn();
    const mockCompleteTodo = jest.fn();
    render(<Todo 
      todo={{
      _id: '109988321',
      text: 'my todo',
      done: true
    }} onClickDelete={mockDeleteTodo}
      onClickComplete={mockCompleteTodo}
    />);

    const completeButton = screen.queryByRole('button', { name: 'Set as done'});
    const deleteButton = screen.queryByRole('button', { name: 'Delete'});


    expect(screen.getByText('my todo')).toBeInTheDocument();
    expect(screen.getByText('This todo is done')).toBeInTheDocument();

    expect(deleteButton).toBeInTheDocument();
    expect(completeButton).not.toBeInTheDocument();

  });

  test('button clicks', async() => {
    const mockDeleteTodo = jest.fn();
    const mockCompleteTodo = jest.fn();
    render(<Todo 
      todo={{
      _id: '109988321',
      text: 'my todo',
      done: false
    }} onClickDelete={mockDeleteTodo}
      onClickComplete={mockCompleteTodo}
    />);

    const completeButton = screen.getByRole('button', { name: 'Set as done'});
    const deleteButton = screen.getByRole('button', { name: 'Delete'});

    await userEvent.click(deleteButton);
    
    expect(mockDeleteTodo).toHaveBeenCalled();

    await userEvent.click(completeButton);

    expect(mockCompleteTodo).toHaveBeenCalled();
    
  })

});
