import {useState} from 'react';
import styles from './App.module.css';

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos]= useState([]);
  
  // 변경
  const onChange = (event) => setToDo(event.target.value);
  //입력
  const onSubmit = (event) => {
    event.preventDefault();
    if( toDo === "") {
      return;
    }
    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo("");
  }
  // 삭제
  const onDelete = (event) => {
    toDos.splice(event.target.id,1);
    setToDos(toDos);
    setToDos((currentArray) => [...currentArray])
  }

  // 날짜
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  return ( 
    <div className={styles.App}>
      <div className={styles.contentBox}>
        <h4>{year+'.'+month+'.'+day}</h4>
        <h1>TO DO LIST! 📑</h1>
        <form onSubmit={onSubmit}>
          <input className={styles.input} type="text" value={toDo} onChange={onChange} placeholder='Write your to do' />
          <button className={styles.button}></button>
        </form>
        <ul>
          {toDos.map(
            (item, index) => 
            <li key = {index} id={index} >
              <div className={styles.list}>
                <span className={styles.span}>{item}</span>
                <div>
                  <button className={styles.delBtn} onClick={onDelete} id={index}>❌</button>
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;

