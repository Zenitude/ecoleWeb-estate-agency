import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: fit-content;
    border-bottom: 1px solid var(--main-black);
    text-align: center;
    position: fixed;
    top: 0;
    z-index: 10;

    p {
        min-height: 69px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: var(--font-title);
        font-size: 2rem;
        position: relative;
        background-color: var(--main-white);

        &::after {
            content: '';
            width: 35px;
            height: 1px;
            background-color: var(--main-black);
            position: absolute;
            bottom: 10px;
        }
    }

    &:hover {
        nav {
            display: flex;
            top: 0;
        }
    }
`;

export const Navigation = styled.nav`
    width: 100%;
    position: relative;
    top: -200px;
    display: none;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 10px;
    z-index: -1;
    transition: top 1s ease-in-out, display 1s ease-in-out ;
    background-color: var(--main-white);
    

    a {
        width: fit-content;
        margin: 0 auto;
        text-decoration: none;
        color: var(--main-black);
        font-size: 1.2rem;
        position: relative;

        &::after {
            content: '';
            height: 1px;
            width: 100%;
            position: absolute;
            bottom: -2px;
            left: 0;
            background-color: var(--main-black);
            transform: scale(0);
            transition: transform 0.2s ease-in-out;
        }

        &:hover::after {
            transform: scale(1)
        }
    }

`;