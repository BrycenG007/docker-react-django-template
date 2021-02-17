import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemText, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { removeTodo, markTodoAsCompleted } from '../../redux/todo/actions';

class TodoList extends Component {
  render() {
    const { todos, onRemoveTodo, onCompleteTodo } = this.props;

    return (
      <ListGroup>
        {todos.map((todo, key) => (
          <ListGroupItem 
            key={key} 
            className="d-flex">
            <ListGroupItemText 
              className="flex-grow-1 overflow-auto">
              {todo.text}
            </ListGroupItemText>
            {todo.isCompleted ? (
                null 
              ) : (
                <Button 
                  color="success"
                  style={{ minWidth: "170px", marginLeft: "12px" }}
                  onClick={() => onCompleteTodo(todo.text)}
                >
                  Mark As Completed
                </Button>
              )
            }
            <Button 
              color="danger"
              style={{ minWidth: "90px", marginLeft: "8px" }}
              onClick={() => onRemoveTodo(todo.text)}
            >
              Remove
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveTodo: text => dispatch(removeTodo(text)),
  onCompleteTodo: text => dispatch(markTodoAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
