import './App.css';
import { Header } from './component/header/Header';
import {useState} from "react";
import MainContent from "./component/maincontent/MainContent";

function App() {
    const [openModal,setOpenModal]=useState(false)
    const [todos,setTodos]=useState([])

    const deleteItem=(id)=>{
        const deleted=todos.filter((el)=>el.id !==id)
        setTodos(deleted)
    }

    const OpenModalHandler=()=>{
        setOpenModal(!openModal)
    }
  return (
    <div className="App">

        <Header
            setTodos={setTodos}
            todos={todos}
            setOpenModal={setOpenModal}
            openModal={openModal}
            OpenModalHandler={OpenModalHandler}
        />
   <MainContent
       deleteItem={deleteItem}
       todos={todos}
       OpenModalHandler={OpenModalHandler
   }/>
    </div>
  );
}

export default App;
