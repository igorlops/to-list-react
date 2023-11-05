import React from 'react'
// CSS
import styles from './TaskList.module.css'

// interface
import { ITask } from '../interfaces/Task'

import { PencilFill, TrashFill } from 'react-bootstrap-icons'

type Props = {
  taskList: ITask[]  
  handleDelete(id:number):void
  handleEdit(task:ITask):void;
}

const TaskList = ({taskList,handleDelete,handleEdit}: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <PencilFill onClick={()=> handleEdit(task)}/>
              <TrashFill onClick={()=>handleDelete(task.id)}/>
            </div>
            
          </div>
        ))
      ) : (
        <p>Não tem tarefas cadastradas</p>
      )}
    </>
  )
}

export default TaskList