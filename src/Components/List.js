const mapStateToProps = state => {
    return { todoList: state.todoList };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      deleteTodo: x => dispatch(deleteTodo(x)),
      completeTodo: x => dispatch(checkTodo(x)),
      toggleEdit: x => dispatch(toggleEdit(x)),
      editTodo: x => dispatch(editTodo(x))
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(List);
  