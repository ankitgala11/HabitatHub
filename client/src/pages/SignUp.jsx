import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleData = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    console.log(formData);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log(data);

    if (data.success === false) {
      setLoading(false);
      setError(data.message);
      return;
    }

    setLoading(false);
    setError(null);
    navigate("/sign-in");
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4  ">
        <input
          type="text"
          placeholder="username"
          className="rounded-lg p-3 border"
          id="username"
          onChange={handleData}
        />
        <input
          type="email"
          placeholder="email"
          className="rounded-lg p-3 border"
          id="email"
          onChange={handleData}
        />
        <input
          type="password"
          placeholder="password"
          className="rounded-lg p-3 border"
          id="password"
          onChange={handleData}
        />
        <button
          className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-85
        disabled:opacity-60 "
        >
          Sign up
        </button>
      </form>
      <div className="flex gap-2 my-2">
        <p>Have an account?</p>

        <Link to="/sign-in">
          <span className="text-blue-700 hover:underline">Sign in</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5 text-center">{error}</p>}
    </div>
  );
}
