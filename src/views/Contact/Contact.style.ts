import styled from "styled-components";

export const ContactContainer = styled.main`
    flex-grow: 1;
    padding: 90px 20px 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    h1 {
        font-weight: 500;
        text-align: center;
    }

    h1 ~ p {
        text-align: center;
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
        margin-top: 20px;
        margin-bottom: 100px;

        article {
            width: 30%;
            min-width: 240px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            gap: 10px;

            img {
                width: 80px;
                margin: 0 auto;
            }
        }
    }

    form {
        display: flex;
        flex-direction: column;       
        box-shadow: 0 10px 15px rgba(0,0,0,0.3);
        padding: 20px;
        font-size: 1.2rem;
        width: 100%;
        max-width: 800px;
        margin: 0 auto;

        & > p:first-of-type {
            text-align: center;
            font-size: 2rem;
            font-weight: 400;
        }

        div:not(fieldset div) {
            margin: 10px 0;
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        fieldset {
            border: none;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;

            label {
                margin-right: 10px;
            }
        }

        label {
            margin: 0 0 10px;
        }

        input:not([type="checkbox"]) {
            width: 100%;
            height: 40px;
            font-size: 1.2rem;
            padding-left: 15px;
            border-radius: 5px;
            border: 1px solid var(--main-black);
        }

        textarea {
            margin-top: 10px;
            padding: 15px 0 0 15px;
            font-size: 1.2rem;
            width: 100%;
            border-radius: 5px;
            border: 1px solid var(--main-black);
            min-height: 200px;
        }

        button {
            height: 40px;
            border-radius: 5px;
            border: 1px solid var(--main-black);
            font-size: 1.2rem;
            align-self: flex-start;
            margin: 0 auto;
            width: 200px;

            &:hover {
                background-color: var(--main-black);
                color: var(--main-white);
            }
        }

    }

    @media (min-width: 965px)
    {
        form fieldset {
            flex-direction: row;
            align-items: center;
            gap: 20px;
        }
    }

`;