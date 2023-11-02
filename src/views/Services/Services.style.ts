import styled from "styled-components";

export const ServicesContainer = styled.main`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 90px 20px 40px;

    h1 {
        font-weight: 500;
        font-size: 2.5rem;
        width: fit-content;
        display: flex;
        flex-direction: column;
        gap: 20px;
        position: relative;
        
        &::after {
            content: '';
            width: 200px;
            height: 2px;
            background-color: var(--main-black);
        }
    }

    .cards {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 30px;
        width: 100%;
        max-width: 1200px;
        min-width: 240px;
        margin: 20px auto;

        article {
            width: 30%;
            min-width: 240px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;

            img {
                width: 100%;
                max-width: 150px;
                min-width: 100px;
                margin: 0 auto;
            }
        }
    }

    a {
        text-decoration: none;
        text-align: center;
        border: 1px solid var(--main-black);
        color: var(--main-black);
        padding: 15px;
        border-radius: 10px;
        font-size: 1.2rem;
        width: fit-content;
        margin: 0 auto;

        &:hover {
            background-color: var(--main-black);
            color: var(--main-white);
        }
    }
`;