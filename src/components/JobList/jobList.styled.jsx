import styled from "styled-components";

export const UlContainer = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-flow: column;
    gap: 1rem;
    width: 80vw
`;

export const LiContainer = styled.li`
    background-color: ${props => props.theme.main};
    width: fit-content;
    padding: 0.5rem;
    border-radius: 1rem;
`