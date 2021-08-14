import styled from 'styled-components'

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    label {
        margin: 0 20px;
    }
    input {
        width: 400px;
        margin: 0px 0px 30px;
        padding: 10px;
    }
`

export const Cards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`

export const Card = styled.div`
    .card-item {
        background: var(--white);
        color: var(--black);
        height: auto;
    }
`
