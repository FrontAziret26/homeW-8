import React from 'react';
import {Button} from "../UI/button/Button";
import styled from "styled-components"

 const DeleteModal = ({openDeleteCard,deleteItem,id }) => {
const deleteOneItem=(id)=>{
    deleteItem(id);
    openDeleteCard()
}
    return (
        <>
<WrapperModal onClick={openDeleteCard} />
    <Container>
        <h3>Вы точно хотите удалить?</h3>
        <div>
            <DeleteBtn onClick={()=>deleteOneItem(id)}>Yes</DeleteBtn>
            <EditBtn onClick={openDeleteCard}>No</EditBtn>
        </div>
    </Container>

        </>
    );
};

export default DeleteModal;

const WrapperModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: #000000a1;
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  position: absolute;
  top: 30%;
  left: 40%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  backdrop-filter: blur(4px);
  z-index: 999;
  border-radius: 20px;
  div{
    display: flex;
    gap: 50px;
  }
`;

const EditBtn = styled.button`
   padding: 7px 15px;
  border-radius: 10px;
  border: none;
  background-color: #7bf14c;
  &:hover {
    background-color: #1d8400;

  }
`
const DeleteBtn = styled.button`
  padding: 7px 15px;
  border-radius: 10px;
  border: none;
  background-color: #f14c4c;
  &:hover {
    background-color: red;

  }
`;