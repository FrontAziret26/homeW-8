import styled from "styled-components"
import { Button } from "../UI/button/Button"
import { Modal } from "../modal/Modal"
import ReactDOM from "react-dom";

export const Header =({OpenModalHandler,openModal,setTodos,todos})=>{

    return(

        <>
       
        <Headers>
            <H1>Favorite Movie</H1>
            <AddMovie onClick={OpenModalHandler}> Add Movie</AddMovie>
            {openModal&&
            ReactDOM.createPortal(<Modal
                todos={todos}
                setTodos={setTodos}
                OpenModalHandler={OpenModalHandler}
                openModal={openModal}

            />,document.getElementById('modal'))}

        </Headers>
        </>
    )
}

const Headers=styled.header`
width: 100vw;
height: 10vh;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 20px 0 20px;
background-color: darkblue;
`
const H1=styled.h1`
     color: white;
     font-size: 40px;
     font-weight: bold;
`
const AddMovie=styled(Button)`
    width: 140px;
    height: 50px;
    background-color: #ff7200;
    color:white;
    font-size: 20px;
    border-radius:10px ;
`