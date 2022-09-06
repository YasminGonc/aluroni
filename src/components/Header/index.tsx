import React from "react";

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { Navigation, Banner, Title } from './styles';

const Header: React.FC = () => {
    return (
        <>
            <Navigation>
                <Logo />
            
            </Navigation>

            <Banner>
                <Title>A casa do código e da massa</Title>
            </Banner>
        </>  
        
    )
}

export default Header;