import styled from 'styled-components'

export const DashboardWrapper = styled.main`
    padding: 20px;
    flex: 1;
    position: relative;
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 20px;

    span {
        margin: 20px 0;
    }
`

export const Cards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
`

export const Card = styled.div`
    .card-item {
        background: var(--black);
        color: var(--gray-100);
        height: auto;
        padding: 20px;
        border-radius: 5px;
        height: 100%;

        & p {
            line-height: 1.5rem;
        }

        & p:first-child {
            font-weight: bold;
            filter: brightness(1.5);
        }

        & p:last-child {
            color: var(--yellow-brand);
            text-align: center;
            margin-top: 2rem;
        }
    }
`
