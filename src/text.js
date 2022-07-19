import React from 'react';

export class Text extends React.Component{
    constructor(props){
        super(props);
        this.handleFirst = this.handleFirst.bind(this);
        this.handleSecond = this.handleSecond.bind(this);
    }

    handleFirst(e) {
        const first = e.target.value;
        this.props.onClick(first);
    }

    handleSecond(e) {
        const second = e.target.value;
        this.props.onClick(second);
    }


    render() {
        return (
            <div className='app-wrap'>
                <div className='text-wrap'>
                    <h1>Im not your {this.props.first} {this.props.second}.</h1>
                </div>
            </div>
        )
    }
}

export class Button1 extends React.Component{
    constructor(props){
        super(props);
        this.handleFirst = this.handleFirst.bind(this);
    }

    handleFirst(e) {
        const first = e.target.value;
        this.props.onClick(first);
    }

    render() {
        return (
            <div className='choosefirst'>
                <h2>Choose first</h2>
                <button onClick={this.handleFirst} value="friend">friend</button>
                    <button onClick={this.handleFirst} value="bro">bro</button>
                    <button onClick={this.handleFirst} value="buddy">buddy</button>
                    <button onClick={this.handleFirst} value="homie">homie</button>
                    <button onClick={this.handleFirst} value="fam">fam</button>
                    <button onClick={this.handleFirst} value="pal">pal</button>
                    <button onClick={this.handleFirst} value="mate">mate</button>
                    <button onClick={this.handleFirst} value="chump">chump</button>
                    <button onClick={this.handleFirst} value="bruv">bruv</button>
                </div>
        )
    }

}

export class Button2 extends React.Component{
    constructor(props){
        super(props);
        this.handleSecond = this.handleSecond.bind(this);
    }

    handleSecond(e) {
        const second = e.target.value;
        this.props.onClick(second);
    }

    render() {
        return (
        <div className='choosesecond'>
            <h2>Choose second</h2>
            <button onClick={this.handleSecond} value="friend">friend</button>
            <button onClick={this.handleSecond} value="bro">bro</button>
            <button onClick={this.handleSecond} value="buddy">buddy</button>
            <button onClick={this.handleSecond} value="homie">homie</button>
            <button onClick={this.handleSecond} value="fam">fam</button>
            <button onClick={this.handleSecond} value="pal">pal</button>
            <button onClick={this.handleSecond} value="mate">mate</button>
            <button onClick={this.handleSecond} value="chump">chump</button>
            <button onClick={this.handleSecond} value="bruv">bruv</button>
        </div>
        ) 
    }
}