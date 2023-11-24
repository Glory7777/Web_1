import React, { Component } from 'react';
import '../assets/css/admin/login.css';
import logo_img from '../assets/images/admin/login/logo_img.png';

class LoginForm2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lgnId: '',
            pwd: '',
            saveId: false,
        };
    }

    componentDidMount() {
        const savedID = this.getCookie('EMP_ID');
        this.setState({ lgnId: savedID || '', saveId: savedID !== '' });
    }

    checkCode = (event) => {
        if (event.keyCode === 13) this.fLoginProc();
    };

    isValidated = () => {
        const chk = this.checkNotEmpty([
            ['EMP_ID', '아이디를 입력해 주세요.'],
            ['EMP_PWD', '비밀번호를 입력해 주세요.'],
        ]);
        return chk;
    };

    fLoginProc = () => {
        if (this.isValidated()) {
            console.log('Proc login,,,');
            this.saveCookie('EMP_ID', this.state.lgnId, this.state.saveId ? 7 : -1);

            // Replace the axios.post call with your preferred HTTP request method
            // and handle the response accordingly.
            // The following code is a placeholder.
            console.log('Simulating login...');
            setTimeout(() => {
                const data = { result: 'SUCCESS' }; // Simulated response
                if (data.result === 'SUCCESS') {
                    console.log('Login successful');
                    // Handle successful login
                    this.props.history.push('/dashboard/home');
                } else {
                    alert('ID 혹은 비밀번호가 틀립니다');
                }
            }, 1000);
        }
    };

    checkNotEmpty = (arr) => {
        for (let i = 0, len = arr.length; i < len; i++) {
            const elem = document.getElementById(arr[i][0]);
            const elemValue = elem.value.trim();
            const alertMsg = arr[i][1];

            if (elemValue === '') {
                alert(alertMsg);
                elem.focus();
                return false;
            }
        }
        return true;
    };

    saveCookie = (nm, id, day) => {
        const today = new Date();
        today.setDate(today.getDate() + day);
        document.cookie = `${nm}=${id}; path=/; expires=${today.toGMTString()};`;
    };

    getCookie = (nm) => {
        const cook = document.cookie + ';';
        const idx = cook.indexOf(nm, 0);
        let val = '';

        if (idx !== -1) {
            const begin = cook.indexOf('=', 0) + 1;
            const end = cook.indexOf(';', begin);
            val = unescape(cook.substring(begin, end));
        }
        return val;
    };

    render() {
        return (
            <form id="myForm" action="" method="post">
                <div id="background_board">
                    <div className="login_form shadow" align="center">
                        <div className="login-form-right-side" style={{ fontSize: '15px' }}>
                            <div className="top-logo-wrap">
                                <img id="login-logo" src={logo_img} alt="logo" />
                            </div>
                            <h3>안되는 것이 실패가 아니라 포기하는 것이 실패다</h3>
                            <p>
                                성공은 실패의 꼬리를 물고 온다. 지금 포기한 것이 있는가?<br />
                                그렇다면 다시 시작해 보자.<br />
                                안되는 것이 실패가 아니라 포기하는 것이 실패다.<br />
                                포기한 순간이 성공하기 5분전이기 쉽다.<br />
                                실패에서 더 많이 배운다.<br />
                                실패를 반복해서 경험하면 실망하기 쉽다. <br />하지만 포기를 생각해선
                                안된다. 실패는 언제나 중간역이지 종착역은 아니다. <br />
                            </p>
                            <p>- 이대희, ‘1%의 가능성을 희망으로 바꾼 사람들’ 에서</p>
                        </div>
                        <div className="login-form-left-side">
                            <fieldset>
                                <legend>로그인</legend>
                                <p className="id">
                                    <label htmlFor="user_id">아이디</label>
                                    <input
                                        value={this.state.lgnId}
                                        id="EMP_ID"
                                        type="text"
                                        name="lgn_Id"
                                        placeholder="아이디"
                                        style={{ imeMode: 'inactive' }}
                                        onKeyPress={this.checkCode}
                                        onChange={(e) => this.setState({ lgnId: e.target.value })}
                                    />
                                </p>
                                <p className="pw">
                                    <label htmlFor="user_pwd">비밀번호</label>
                                    <input
                                        value={this.state.pwd}
                                        id="EMP_PWD"
                                        type="password"
                                        name="pwd"
                                        placeholder="비밀번호"
                                        onFocus={(e) => (e.target.placeholder = '')}
                                        onKeyPress={this.checkCode}
                                        onChange={(e) => this.setState({ pwd: e.target.value })}
                                    />
                                </p>
                                <p className="member_info">
                                    <input
                                        checked={this.state.saveId}
                                        id="cb_saveId"
                                        type="checkbox"
                                        onKeyUp={this.checkCode}
                                        onChange={() => this.setState({ saveId: !this.state.saveId })}
                                    />
                                    <span className="id_save">ID저장</span>
                                </p>
                                <div>
                                    <a href="/" id="RegisterBtn" name="modal"><strong>[회원가입]</strong></a>
                                    <a href="/"><strong>[아이디/비밀번호 찾기]</strong></a>
                                </div>
                                <a className="btn_login" id="btn_login" onClick={this.fLoginProc} href="{() => false}"><strong>Login</strong></a>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </form>
        );
    };
}



export default LoginForm2;