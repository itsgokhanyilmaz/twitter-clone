import React from 'react';
import { Input, List, Icon, Avatar } from 'antd';
import axios from 'axios';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        const Search = Input.Search;

        return (
            <div >
                <Search
                    style={{width: 300}}
                    placeholder="Enter a username"
                    onSearch={value => console.log(value)}
                    enterButton
                />
                <br />
            </div>
        );
    }
}

export default Search;
