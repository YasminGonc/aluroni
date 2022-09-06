import React from "react";
import { Input } from './styles';

export interface Props {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<Props> = ({
    search,
    setSearch
}) => {
    return (
        <Input 
            value={search}
            onChange={(event) => setSearch(event.target.value)}
        />
    )
}

export default SearchInput;