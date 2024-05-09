import { useRef, useState } from "react"
import { Task } from "./components/Task"

import styles from './App.module.css';


export function App(){
  const inputRef = useRef(null)
  const [tasks, setTasks] = useState([])
  const [inputClassName, setInputClassName] = useState(styles.input) 

  

  function handleAddTask(){

    if(inputRef.current.value == ''){
      setInputClassName(styles.inputError)
    } 

    else{
      setInputClassName(styles.input)
      const newTask = {
        id: tasks.length + 1,
        title: inputRef.current.value,
        isCompleted:false
      }
      setTasks([...tasks, newTask])
  
      inputRef.current.value = ''

      
    }

  }

  function taskCompleted(id){
    const taskIndex = tasks.findIndex(item => item.id == id)

    if (taskIndex !== -1 && !tasks[taskIndex].isCompleted) {
      const updatedTasks = [...tasks];
      updatedTasks[taskIndex] = { ...updatedTasks[taskIndex], isCompleted: true };
      setTasks(updatedTasks);
    }

  }

  function press(event){
      if(event.key === 'Enter'){
        handleAddTask();
      }
    
  }

  function removeTask(id){
    const taskIndex = tasks.filter(item => item.id !== id)
    setTasks(taskIndex)
  }

  function removeAll(){
    setTasks([]);
  }
  
  return(
    <main className={styles.container}>
      <h1 className={styles.title}>Todo To</h1>

      <div className={styles.inputGroup}>
        <input className={inputClassName} ref={inputRef} onKeyDown={press} type="text" placeholder="Digite sua tarefa"/>
        <button className={styles.button} onClick={handleAddTask}>Add</button>
        <button className={styles.buttonClean} onClick={removeAll}>Limpar</button>
      </div>

      <div className={styles.tasks}>

        {tasks.map(item => (
          <Task key ={item.id} task = {item} taskCompleted={taskCompleted} removeTask={removeTask}/>
        ))}

        {!tasks.length && <p>Nenhuma tareda ainda...</p>}

      </div>

    </main>
  )
}