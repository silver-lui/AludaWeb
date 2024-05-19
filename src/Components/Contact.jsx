import "../Style/Content-Style.css";

function Contact() {
    return (
        <>
            <div className="contact-wrapper">
                <p className="title">Fill the form to <span>contact us.</span></p>
                <div className="inputs">
                    <div className="rest">
                        <div className="name">
                            <div className="box">
                                <input className="f-name" required type="text" />
                                <p className="f-name-p">First Name</p>
                            </div>
                            <div className="box">
                                <input className="l-name" required type="text" />
                                <p className="l-name-p">Last Name</p>
                            </div>
                        </div>
                        <div className="box">
                            <input  className="email" required type="text" />
                            <p className="email-p">Email</p>
                        </div>
                        <div className="btn">
                            <button>Upload file</button>
                            <button>Send Message</button>
                        </div>
                    </div>
                    <div className="message">
                        <p className="text-p">Message</p>
                        <input className="text" type="text" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
