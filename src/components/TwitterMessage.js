import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      maxChars: props.maxChars
    };
  }

  handleMessageChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleMessageChange(event)}
        value={this.state.message}
        name="message" id="message" />
      </div>
    );
  }
}

export default TwitterMessage;
