import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width : 1100px;
    background : #ebfeff;
    border : 2px solid #0085a3;
    border-radius : 10px;
    padding : 20px;
    box-shadow : 0px 5px 10px rgba(0,0,0,0.5);
    text-align : center;

    p {
        font-size :1rem;
    }
`

type ButtonWrapperProps ={
    correct : boolean
    userSelect : boolean
}
export const ButtonWrapper =styled.div<ButtonWrapperProps>`
    transition : 0.3s ease all;

    :hover{
        opacity :0.8;
    }

    button {
        cursor : pointer;
        user-select : none;
        font-size : 0.8rem;
        width :100%;
        height : 40px;
        text-align :center;
        margin : 5px 0;
        background : ${({correct , userSelect})=>
            correct 
            ? 'linear-gradient(90deg , #56ffa4 , #59bc86)'
            : (!correct && userSelect)
            ? 'linear-gradient(90deg , #ff5656 , #c16868)'
            : 'linear-gradient(90deg , #56ccff , #6aefb4)' 
        };
        border : 3px solid #fff;
        box-shadow : 1px 2px 0px rgba(0,0,0,0.1);
        border-radius : 10px;
        color : #fff;
        text-shadow : 0px 1px 0px rgba(0,0,0,0.5);
    }
`