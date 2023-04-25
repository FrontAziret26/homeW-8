import React, {useState} from 'react';
import styled from "styled-components"
import {Button} from "../UI/button/Button";
import DeleteModal from "../modal/DeleteModal";
import ReactDOM from "react-dom";

const MainContent = ({todos,deleteItem}) => {
    const [openDelCard,setOpenDelCard]=useState(false)
    const openDeleteCard=(id)=>{
        setOpenDelCard(!openDelCard)
    }
    return (
        <>
            {todos.map((el)=>(

                <MainContainer key={el.id}>
                    <div>
                        <MainImg src={el.url} />
                    </div>
                    <Block>
                        <h4>{el.title}</h4>
                        <Rating>{el.rating}/5stars</Rating>
                        <CardDeleteButton onClick={()=>openDeleteCard(el.id)}>Delete</CardDeleteButton>
                        {openDelCard && ReactDOM.createPortal(<DeleteModal  deleteItem={deleteItem}
                        id={el.id} todos={todos} openDeleteCard={openDeleteCard}/>,document.getElementById('modal'))}

                    </Block>
                </MainContainer>

            ))}
        </>
    );
};

export default MainContent;

const MainContainer = styled.div`
  width: 700px;
  height: 200px;
  background-color: aquamarine;
  display: flex;
  gap: 20px;
  margin: 0 auto;
  border-radius: 20px;
  margin-top: 20px;
  box-shadow: 9px 9px 10px 0px rgba(34, 60, 80, 0.36);
`;

const MainImg = styled.img`
  width: 250px;
  height: 200px;
  border-radius: 20px;
  border: 1px solid black;
`;

const Rating = styled.span`
  background-color: rgb(227, 165, 31);
  color: aliceblue;
  width: 100px;
  padding: 5px 13px;
  border-radius: 10px;
  font-size: large;
`;
const Block = styled.div`
  margin-left: 20px;
  h4 {
    padding-bottom: 25px;
  }
`;
const CardDeleteButton = styled.button`
  padding: 8px 12px;
  background-color: red;
  border-radius: 10px;
  color: aliceblue;
  margin-left: 20px;
  font-weight: 700;
  border: none;
  &:hover{
    background-color: #0fa8ea;
  }
  &:active{
    background-color: green;
  }
`;