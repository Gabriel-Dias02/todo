import styles from './styles.module.css'


export function Task(props){

    function viewDate(){
        const date = new Date();
        const formatDate= `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
        return formatDate
    }

    return(
        <div className={styles.container}>
            <p className={`${styles.text} ${styles.title} ${props.task.isCompleted && styles.completed}`} >{props.task.id}. {props.task.title}</p> 
            <p>{viewDate()}</p>
            <div>
                {!props.task.isCompleted && (
                    <button onClick={() => props.taskCompleted(props.task.id)} className={styles.button}>Ok</button>
                )}
                {!props.task.isCompleted && (

                    <button onClick={() => props.removeTask(props.task.id)} className={styles.removeButton}>Apagar</button>

                )}
            </div>
        </div>
    )

}