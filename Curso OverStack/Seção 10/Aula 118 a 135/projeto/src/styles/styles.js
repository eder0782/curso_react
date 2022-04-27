import { createGlobalStyle } from "styled-components";


export const EstiloGlobal = createGlobalStyle`
    *{

        padding: 0;
        margin: 0;
    }

    body{
        font-family: 'Roboto', sans-serif;
    }

    a{
        text-decoration: none;
        cursor: pointer;
        outline: none;
    }
    button,input{
        outline:none;
    }

    button{
        border: none;  
        
        cursor: pointer;
        
    }

    :root{
    --primary: #011017;
    --secondary: #15181c;
    --search: #202327;
    --white: #d9d9d9;
    --gray: #7a7a7a;
    --outline: #2f3336;
    --retweet: #00c06b;
    --like: #e8265e;
    --overstack: #8257e6;
    --overstack-light-hover: #bf00b5;
    --color-gradient: linear-gradient(155.34deg,var(--overstack) 30.41%,var(--overstack-light-hover) 100%);
    --color-gradient-hover: linear-gradient(155.34deg,#bf00b5 -0.59%,#8257e6 80%);
    --color-tertiary: #9935d3;
    --color-backgound:#121214;


    --border-radius:8px;
    }

    body{
        background-color: var(--color-backgound);
    }


`;