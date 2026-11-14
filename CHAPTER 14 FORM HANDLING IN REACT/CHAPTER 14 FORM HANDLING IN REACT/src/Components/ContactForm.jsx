import { useState } from "react";

function ContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!data.name || !data.email) {
      alert("All fields required");
      return;
    }

    console.log("Submitted:", data);
    alert("Message sent!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <textarea name="message" placeholder="Message" onChange={handleChange} />
      <button>Send</button>
    </form>
  );
}

export default ContactForm;


