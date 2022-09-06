import styled from "styled-components";

import bannerImg from '../../assets/header.png'

export const Navigation = styled.nav`
    padding: 20px;
`;

export const Banner = styled.div`
    height: 300px;

    background-color: red;
    background-image: url(${bannerImg});
    background-size: cover;
    background-repeat: repeat;

    display: flex;
    align-items: center;
`;

export const Title = styled.h1`
    color: white;
    font-size: 4rem;

    padding: 20px;
    min-width: 400px;

`;



