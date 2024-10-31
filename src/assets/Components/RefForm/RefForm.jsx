import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorRef, setError] = useState("");

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);

    if (passwordRef.current.value.length < 6) {
      setError("your password is less than 6");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-10/12 mx-auto h-60 justify-center items-center my-5"
      >
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input
            ref={nameRef}
            type="text"
            className="grow"
            name="name"
            placeholder="Full Name"
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          Email
          <input
            ref={emailRef}
            defaultValue={"example@xyz.abc"}
            type="email"
            className="grow"
            name="email"
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          Password
          <input
            ref={passwordRef}
            type="password"
            className="grow w-full"
            name="password"
            placeholder="****"
          />
        </label>
        {errorRef && errorRef}
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="submit"
            value="Submit"
            className="btn self-center w-full"
          />
        </label>
      </form>
    </div>
  );
};

export default RefForm;
