import React from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import axios from 'axios';
const FormItem = Form.Item;

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: undefined,
            password: undefined,
        };
        this.handleUserLogin = this.handleUserLogin.bind(this);

    }

    handleUserLogin () {
        const { username, password } = this.state;
        const formData = {
            username : username,
            password : password,
        };
        console.log(formData);
        axios.post('http://127.0.0.1:8000/api-token-auth/', formData)
            .then((res) => {
                const token = res.data.token;
                console.log(token);
                localStorage.setItem('token', token);
                //this.props.history.replace('/');
            })
            .catch((error) => {
                message.error('Login Failed!');
            });
    }
    handleChangeForm(value, type) {
        this.setState({
            [type]: value,
        });
    }

    render() {
        return (
            <div>
                <Form className="login-form">
                    User: <FormItem style={{ width: 250 }}>
                        <Input
                            name="username"
                           onChange={(e) => this.handleChangeForm(e.target.value, 'username')}
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="user"
                            placeholder="Username"
                        />
                    </FormItem>
                    Pass:
                    <FormItem style={{ width: 250 }}>
                        <Input
                            name="username"
                           onChange={(e) => this.handleChangeForm(e.target.value, 'password')}
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />

                        <Button
                            onClick={() => {this.handleUserLogin()}}
                            type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        <br />Or <a href="">register now!</a>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

export default Login;
