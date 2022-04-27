import styled from "styled-components";

export const Container= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    
`;


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;

    @media (max-width:1000px ) {
        width: 50%;

    }
    @media (max-width:600px ) {
        width: 80%;

    }


`;

export const Input = styled.input`
    border-radius: var(--border-radius);
    font-size: 18px;
    width: 89%;
    padding: 15px 20px;
    margin-bottom: 25px;
    border: 2px solid var(--overstack-light-hover);
    color: var(--gray);
    background-color: var(--color-backgound);


`;

export const Button = styled.button`
    border-radius: var(--border-radius);
    font-size: 18px;
    width:100%;
    padding: 15px 20px;
    font-weight: 700;
    background: var(--color-gradient);
    color: var(--white);

    :hover{
        background: var(--color-gradient-hover);
    }


`;