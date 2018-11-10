import React from 'react';
import { Form, Select, Input, Button } from 'antd';

const { TextArea } = Input;

const FormItem = Form.Item;
const Option = Select.Option;

class TweetPost extends React.Component {

    render() {
        return (
            <div>
                <br/>
                <Form style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} >
                    <TextArea style={{width:400, display: 'flex',  justifyContent:'center', alignItems:'center' }} placeholder="What's happening?" autosize={{ minRows: 2, maxRows: 4 }} />
                    <br/><br/>
                </Form>
                <br/>
                <Form style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} >
                <Button style={{width:150}} type="primary" htmlType="submit">
                    Tweet
                </Button>
                </Form>
            </div>
        );
    }
}

export default TweetPost;
