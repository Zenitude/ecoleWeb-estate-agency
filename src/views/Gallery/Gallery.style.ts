import styled from "styled-components";

export const GalleryContainer = styled.main`
    flex-grow: 1;
    padding: 70px 20px 20px;
    
    h1 {
        text-align: center;
        font-weight: 500;
        font-size: 3rem;
        margin-block: 20px;
    }

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .images {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 300px));
        justify-content: center;
        max-width: 980px;
        gap: 10px;
        margin: 0 auto;

        article {
            width: 100%;
            max-width: 300px;
            min-width: 260px;
            height: 240px;

            button {
                width: 100%;
                height: 100%;
            }

            p {
                display: flex;
                justify-content: space-between;
                font-size: 1.2rem;
            }

            p span:last-of-type {
                font-weight: 600;
            }

            img {
                width: 100%;
                height: 200px;
                object-fit: cover;
            }
        }
    }

    dialog {
        width: 70%;
        height: 70%;
        margin: auto;
        overflow: hidden;

        &::backdrop {
            background-color: rgba(0,0,0,0.8);
        }

        .closeModal {
            position: absolute;
            top: 30px;
            right: 30px;
            font-size: 2rem;
            font-weight: bold;
            padding: 5px 10px;
            border-radius: 50%;
            z-index: 10;
            color: transparent;
            background-image: linear-gradient(to right, var(--main-blue), var(--main-yellow));
            background-clip: text;
            -webkit-background-clip: text;
            filter: drop-shadow(0 0 1px var(--main-black));
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .buttons {
            display: flex;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
            z-index: 10;

            button {
                position: absolute;
                width: 50px;
                height: 50px;
                background-color: var(--main-white);
                border-radius: 50%;

                img {
                    height: 70%;
                    object-fit: fill;
                }
            
                &:first-of-type {
                    left: 10px;
                }

                &:last-of-type {
                    right: 10px;
                }
            }



        }
    }

`;