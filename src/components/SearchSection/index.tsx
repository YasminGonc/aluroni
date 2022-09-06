import React, { useState } from "react";
import { Input } from "./SearchInput/styles";

import { Container, Title } from './styles'

const SearchSection: React.FC = () => {
    const [search, setSearch] = useState('');

    return (
        <Container>
            <Title>Cardápio</Title>
            <Input 
                search={search}
                setSearch={setSearch}    
            />
        </Container>
    )
}

export default SearchSection;