import styled from "styled-components";

export const HomeContainer = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;

    section:first-of-type {
        background-color: var(--main-blue);
        padding: 90px 40px 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        h1 img {
            width: 75px;
        }

        h1 {
            font-size: 3rem;
            display: flex;
            flex-direction: column;
        }

        p {
            line-height: 1.5;
            font-size: 18px;
        }

        a {
            text-decoration: none;
            border: 1px solid var(--main-black);
            border-radius: 10px;
            width: fit-content;
            font-size: 20px;
            padding: 10px 15px;
            color: var(--main-black);
            transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out ;

            &:hover {
                background-color: var(--main-black);
                color: var(--main-blue);
            }
        }
    }

    .carousel {
        width: 100%;
        flex-grow: 1;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .buttons {
            width: 100%;
            position: absolute;
            bottom: 20px;
            display: flex;
            justify-content: center;
            gap: 50px;
            

            button {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            img {
                width: 60%;
                height: 60%;
            }
        }

    }

    section:nth-of-type(2) {
        background-color: var(--main-dark);
        color: var(--main-white);
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        justify-content: center;
        padding: 20px 40px;

        h2 {
            font-weight: 500;
            font-size: 24px;
        }

        p { font-size: 18px; }

        a {
            text-decoration: none;
            border: 1px solid var(--main-white);
            border-radius: 10px;
            width: fit-content;
            font-size: 14px;
            padding: 15px 15px;
            color: var(--main-white);
            transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out ;

            &:hover {
                background-color: var(--main-white);
                color: var(--main-dark);
                font-weight: bold;
            }
        }

    }

    section:last-of-type {
        padding: 20px 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 40px;
        background-color: var(--main-yellow);

        h2 {
            text-transform: uppercase;
            text-align: center;
        }

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 80px;
            height: 80px;
            border: 1px solid var(--main-black);
            border-radius: 50%;
        }

        img {
            width: 50%;
        }
    }

    @media (min-width: 965px) {
        display: grid;
        grid-template-columns: 600px 1fr;
        grid-template-rows: 500px 1fr;

        section:first-of-type {
            h1 {
                font-size: 4rem;
            }
        }

        section:is(:nth-of-type(2), :last-of-type) h2 {
            font-size: 2.5rem;
        }

        section:last-of-type {
            flex-direction: row;
            gap: 10px;
        }
    }

    @media (min-width: 1400px) {
        grid-template-columns: 600px 1fr 600px;
        
        .carousel {
            grid-area: 1 / 2 / 2 / 4;
        }

        section:nth-of-type(2) {
            grid-area: 2 / 1 / 3 / 3;
        }
    }

`;