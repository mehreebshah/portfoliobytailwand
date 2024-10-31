import "../style/contact.css";
const Contact = ()=> {
    return(
        <div className="contact-container">
  <div className="head-con">Contact Me</div>
  <p className="para-con">
    Feel free to contact me directly through this form.
  </p>
  <div className="form-con">
    <form  className="container">
      <div>
        <input
          type="text"
          placeholder="Your Name"
        />
        <input
          type="email"
          placeholder="Your Email"
        />
      </div>
      <input
        type="text"
        placeholder="Subject"
      />
      <textarea
        name="write"
        placeholder="Write Me..."
      ></textarea>
      <input
        type="submit"
        value="Send Message"
        className="submit-btn"
      />
    </form>
  </div>
</div>

    )
}

export default Contact