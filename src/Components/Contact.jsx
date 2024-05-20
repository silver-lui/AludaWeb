import "../Style/Contact-Style.css";

function Contact() {
    return (
        <>
            <div className="contact-wrapper">
                <p className="title">Fill the form to <span>contact us.</span></p>
                <div className="inputs">
                    <div className="inp-child rest">
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
                        <div className="email-box">
                            <input className="email" required type="text" />
                            <p className="email-p">Email</p>
                        </div>
                        <div className="btn">
                            <button>Send</button>
                        </div>
                    </div>
                    <div className="inp-child message">
                        <p >Message</p>
                        <textarea type="text" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
