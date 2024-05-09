import { useState } from 'react';
import styles from './styles.module.css'


export function Task(props){

    const [dataTime, setDataTime] = useState(null);

    function handleTaskCompleted(){
        if (!props.task.isCompleted){
            props.taskCompleted(props.task.id);
            setDataTime({date: viewDate(), time:viewTime()});

        }
    }

    function viewDate(){
        const date = new Date();
        const formatDate= `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
        return formatDate
    }
    
    function viewTime(){
        const time = new Date();
        const formatTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
        return formatTime

    }

    return(
        <div className={styles.container}>
            <p className={`${styles.text} ${styles.title} ${props.task.isCompleted && styles.completed}`} >{props.task.id}. {props.task.title}</p> 
            <p>{viewDate()}</p>
            <div>
                {!props.task.isCompleted && (
                    <button onClick={handleTaskCompleted} className={styles.button}>Ok</button>
                )}
                {!props.task.isCompleted && (

                    <button onClick={() => props.removeTask(props.task.id)} className={styles.removeButton}>Apagar</button>

                )}

                <p>{dataTime && dataTime.date}</p>
                <p>{dataTime && dataTime.time}</p>

          
            </div>
        </div>
    )

}