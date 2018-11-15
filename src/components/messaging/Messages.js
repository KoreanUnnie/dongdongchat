import React, { Component } from 'react';

export default class Messages extends Component {

	constructor(props) {
	  super(props);
	  this.scrollDown = this.scrollDown.bind(this)
	}


	/*
	*	Scrolls down the view of the messages.
	*/
	scrollDown(){
		const { container, thread } = this.refs
		container.scrollTop = container.scrollHeight
		thread.scrollTop = thread.scrollHeight
	}

	componentDidUpdate(newProps){
		this.scrollDown();

	}

	componentDidMount(){
		this.scrollDown();
	}

	render() {
		const { messages, user, typingUsers } = this.props;
		let typingText = '';
		typingUsers.forEach(function(name){
			typingText += name + ', '
		})
		typingText = typingText.substring(0, typingText.length - 2);
		if(typingUsers.length > 0){
					typingText += ' is typing...';
		}

		return (
			<div ref={'container'}
					className="thread-container">
					<div ref={'thread'} className="thread">
					{
						messages.map((mes, i)=>{

							return(
							<div key={mes.id} className={`message-container ${mes.sender === user.name && 'right'}`}>

								<div className="data">
									<div style={{position: 'relative'}}>
										<div className="name">{mes.sender}</div>
										<div className="message-time">
										<div className="message">{mes.message}</div>
										<div className="time">{mes.time}</div>
										</div>

									</div>
								</div>


							</div>)
						})

					}
					<div className="typing-user">
					{typingText}
					</div>

					</div>
			</div>
		);
	}
}
