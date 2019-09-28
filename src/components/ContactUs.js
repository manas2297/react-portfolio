import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="five columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
            <h4>Linked in :{resumeData.linkedinId}</h4>
          </div>
          <div className="seven columns">
            <h2>Contact Me:</h2>
            <form>
              <input
                className="full-width"
                type="text"
                name="title"
                id="tittle"
                placeholder="Title"
              />

              <textarea
                name="message"
                id="message"
                placeholder="enter you message here"
              />
              <button className="full-width">Send</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
