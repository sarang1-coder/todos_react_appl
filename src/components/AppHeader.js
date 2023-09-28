import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';
import TodoModal from './TodoModal';
import { updateFilterStatus,clearAllTodos } from '../slices/todoSlice';

function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false);
  const initialFilterStatus = useSelector((state) => state.todo.filterStatus);
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
  const dispatch = useDispatch();

  const updateFilter = (e) => {
    setFilterStatus(e.target.value);
    dispatch(updateFilterStatus(e.target.value));
  };

  const handleclearTodos=()=>{
    dispatch(clearAllTodos());
  }

  return (
    <div className={styles.appHeader}>
      <Button 
        variant="primary" 
        onClick={() => setModalOpen(true)}>
        Add Task
      </Button>
      <div className={styles.rightBtn}>
        <button
          style={{marginRight:'1rem'}} 
          variant="primary" 
          onClick={handleclearTodos}>
            Delete Todos
        </button>
        <SelectButton
          id="status"
          onChange={(e) => updateFilter(e)}
          value={filterStatus}
        >
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="complete">Completed</option>
        </SelectButton>
      </div>
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader;
