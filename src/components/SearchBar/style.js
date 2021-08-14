import styled from 'styled-components'

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    form {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        label {
            margin: 20px 0px;
        }
        input {
            width: 400px;
            margin: 0px 0px 30px;
            padding: 10px;
        }

        button {
            position: relative;
            padding: 10px;
            letter-spacing: 2px;
            text-decoration: none;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
            overflow: hidden;
            background: #0b0b0b;
            color: var(--white);
            border: none;
            width: 100%;
            text-transform: uppercase;
        }

        button:before {
            content: '';
            position: absolute;
            top: 2px;
            left: 2px;
            bottom: 2px;
            width: 50%;
            background: rgba(255, 255, 255, 0.05);
        }

        button span:nth-child(1) {
            position: absolute;
            top: 13px;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(to right, #0b0b0b, #d5c61c);
            animation: animate1 2s linear infinite;
        }

        @keyframes animate1 {
            0% {
                transform: translateX(-100%);
            }

            100% {
                transform: translateX(100%);
            }
        }

        button span:nth-child(2) {
            position: absolute;
            top: 0;
            right: 0;
            width: 2px;
            height: 100%;
            background: linear-gradient(to bottom, #0b0b0b, #d5c61c);
            animation: animate2 2s linear infinite;
            animation-delay: 1s;
        }

        @keyframes animate2 {
            0% {
                transform: translateY(-100%);
            }

            100% {
                transform: translateY(100%);
            }
        }

        button span:nth-child(3) {
            position: absolute;
            bottom: 13px;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(to left, #0b0b0b, #d5c61c);
            animation: animate3 2s linear infinite;
        }

        @keyframes animate3 {
            0% {
                transform: translateX(100%);
            }

            100% {
                transform: translateX(-100%);
            }
        }

        button span:nth-child(4) {
            position: absolute;
            top: 0;
            left: 0;
            width: 2px;
            height: 100%;
            background: linear-gradient(to top, #0b0b0b, #d5c61c);
            animation: animate4 2s linear infinite;
            animation-delay: 1s;
        }

        @keyframes animate4 {
            0% {
                transform: translateY(100%);
            }

            100% {
                transform: translateY(-100%);
            }
        }
    }
`
