import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({ 
    name: "", 
    email: "", 
    message: "" 
  });

  const handleChange = (e) => {
    setFormState({ 
      ...formState, 
      [e.target.name]: 
      e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <div className="page container">
      <h1>Contact Page</h1>
      <p>
        Do you want to know more about me or my projects? Feel free to reach out!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            className="form-control"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
