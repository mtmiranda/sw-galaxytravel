import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    background: var(--black);
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--yellow-brand);
    font-family: Starjedi, sans-serif;

    .header-icon {
        width: 64px;
        height: 64px;
        margin-top: 20px;
    }
`
