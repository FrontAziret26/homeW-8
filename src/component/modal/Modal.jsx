import styled from "styled-components"
import {Button} from "../UI/button/Button"
import { useRef } from "react";


export const Modal = ({OpenModalHandler, todos, setTodos}) => {
    const titleValue = useRef()
    const urlValue = useRef()
    const ratingValue = useRef()

    const submitHandler = (e) => {
        e.preventDefault()

        const data = {
            id: Date.now().toString(),
            title: titleValue.current.value,
            url: urlValue.current.value,
            rating: ratingValue.current.value,
        }
        setTodos([...todos, data]);

        titleValue.current.value = "";
            urlValue.current.value = "";
            ratingValue.current.value = "";
            OpenModalHandler()
    }
    return (
        <>
            <ContainerForm>

                <ModalContent onClick={OpenModalHandler}/>
                <Form>
                        <MyLabel> Title:
                            <MyInput type="text" ref={titleValue}/>
                        </MyLabel>
                        <MyLabel> Img:
                            <MyInput type="url" ref={urlValue}/>
                        </MyLabel>
                        <MyLabel>Rating:
                            <MyInput type="number" ref={ratingValue}/>
                        </MyLabel>



                    <div>
                        <ButtonCancel onClick={OpenModalHandler}>Cancel</ButtonCancel>
                        <ButtonAdd onClick={submitHandler}>Add</ButtonAdd>

                    </div>
                </Form>


            </ContainerForm>
        </>
    )
}

const ModalContent = styled.div`
  position: absolute;
  background-color: #000000a1;
  width: 100%;
 
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 999;

`
const Form = styled.form`
  width: 45vw;
  height: 400px;
  background-color: #fff;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  gap: 20px;
  position: fixed;
  z-index: 999;
  top: 0;

`
const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const MyLabel = styled.label`
  font-size: 30px;
  font-weight: bold;
`;

const MyInput = styled('input')`
  width: 450px;
  height: 35px;
  border-radius: 10px;

display: flex;
  justify-content: center;
  align-content: center;
  background: #FFFFFF;
  mix-blend-mode: normal;
  border: 2px solid #8A72EA;
  box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.25);

`

const ButtonCancel = styled(Button)`
  width: 100px;
  height: 40px;
  background-color: purple;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 16px;
    margin-right: 15px;
  &:hover {
    background-color:purple;
    font-size: 19px;
    font-weight: 700;
  }
`

const ButtonAdd = styled(Button)`
  width: 100px;
  height: 40px;
  background-color: #39df39;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  margin-left: 15px;

  &:hover {
    background-color: green;
    font-size: 19px;
    font-weight: 700;
`;