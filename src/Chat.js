import React from "react";
import io from "socket.io-client";
import '../src/chat.css';
import {dummy} from './images/dummy.jpg'



export class Chat extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: []
        };

        this.socket = io('localhost:8080');

        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
        });

        const addMessage = data => {
            console.log(data);
            this.setState({messages: [...this.state.messages, data]});
            console.log(this.state.messages);
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
            })
            this.setState({message: ''});

        }
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                            <hr/>
                                <div className="messages">
                                    {this.state.messages.map(message => {
                                        return (
                                            <div>
                                
                                            :{message.author}:{message.message}</div>
                                        )
                                    })}
                                </div>

                            </div>
                            <div className="card-footer">
                                <input type="text" placeholder="Your Name" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control1"/>
                                <br/>
                                <input type="text" placeholder="Add A Comment" className="form-control2" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
                                <br/>
                               
                                <button onClick={this.sendMessage} className="btn btn-primary form-control sizei">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;