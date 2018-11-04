import React from 'react';
import { List, Icon, Avatar } from 'antd';
import axios from 'axios';

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

class TweetFeed extends React.Component {

    constructor(props) {
        super(props); 
        this.state = { 
            tweets: [] 
        };
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/tweets/')
            .then(res => {
                const tweets = res.data;
                this.setState({
                    tweets
                });
            })
    }

    render() {
        const { tweets } = this.state;
        return (
            <div>
                <List
                style= {{flex:1}}
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 3,
                }}
                dataSource={tweets}
                renderItem={tweet => (
                    <List.Item
                        key={tweet.username}
                        actions={[<IconText type="star-o" text="19" />, <IconText type="like-o" text="05" />, <IconText type="message" text="2" />]}
                    >
                        <List.Item.Meta
                            title={'@' + tweet.user_id}
                            description={tweet.username}
                        />
                        {tweet.content}
                    </List.Item>
                )}
            />
        </div>
        );
    }
}

export default TweetFeed;
