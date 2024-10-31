import { useState } from "react";

const StatefullForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Your Submited name is: " + name);
    console.log("Your Submited email is: " + email);
    console.log("Your Submited password is: " + password);
  };

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleEmaleChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    if (value.length < 6) {
      setError("Your password is less the 6 character");
    } else {
      setError("");
      setPassword(value);
    }
  };
  return (
    <div>
      <form
        className="flex flex-col  w-10/12 mx-auto h-60 justify-center items-center  "
        onSubmit={handleSubmit}
      >
        <input
          onChange={handleNameChange}
          type="text"
          name="name"
          placeholder="Enter Your Full Name"
        />
        <br />
        <input
          onChange={handleEmaleChange}
          type="email"
          name="email"
          placeholder="Enter Your e-mail"
        />
        <br />
        <input
          onChange={handleChangePassword}
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <br />
        {error && <p>{error}</p>}
        <input type="submit" value="Submit" className="btn self-center" />
      </form>
    </div>
  );
};

export default StatefullForm;
