import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

class Login extends React.Component {

    constructor(props) {
        super(props); 
        this.state = { values: true };
      }

    render() {
    

        return (
        <div>
            <Form className="login-form">
                Username: <FormItem style={{width:250}}> 
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                </FormItem>
                Password:
                <FormItem style={{width:250}}>
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
            </Button>
                    <br/>Or <a href="">register now!</a>
                </FormItem>
            </Form>
        </div>
        );
    }
}

export default Login;
