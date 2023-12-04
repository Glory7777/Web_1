import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
   
    
    messageText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
};

class Notification extends React.Component {
    constructor(props){
        super(props);
        // super(props)를 호출하여 React.Component 클래스의 생성자를 실행. 
        // 이를 통해 React 컴포넌트가 기본적인 동작을 수행하고 초기화할 수 있게 됨.
        this.state= {};
        // this.state는 React 컴포넌트의 상태를 나타내는 객체. 상태는 컴포넌트가 변경되면서 업데이트되는 데이터를 관리하는 데 사용. 
        // 상태를 초기화하고 변경할 때 this.state를 사용
    }

    componentDidMount() {
        console.log(`${this.props.id} componentDidMount() called.`);
    }

    componentDidUpdate () {
        console.log(`${this.props.id} componentDidUpdate() called.`);
    }

    componentWillUnmount() {
        console.log(`${this.props.id} componentWillUnmount() called.`);
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        );
    }
}

export default Notification;