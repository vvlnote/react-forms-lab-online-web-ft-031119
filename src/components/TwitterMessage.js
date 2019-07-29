import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      maxChars: props.maxChars
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleMessageChange}
        value={this.state.message}
        name="message" id="message" />
      </div>
    );
  }
}

export default TwitterMessage;
