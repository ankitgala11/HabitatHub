import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	signInFailure,
	signInStart,
	signInSuccess,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

export default function SignIn() {
	const [formData, setFormData] = useState({});
	const { error, loading } = useSelector((state) => state.user);
	// const [error, setError] = useState(null);
	// const [loading, setLoading] = useState(false);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleData = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		dispatch(signInStart());
		console.log(formData);

		const res = await fetch("/api/auth/signin", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(formData),
		});

		const data = await res.json();
		console.log(data);

		if (data.success === false) {
			dispatch(signInFailure(data.message));
			return;
		}
		dispatch(signInSuccess(data));

		navigate("/");
	};

	return (
		<div className="p-3 max-w-lg mx-auto">
			<h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
			<form onSubmit={handleSubmit} className="flex flex-col gap-4  ">
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
					Sign In
				</button>
				<OAuth />
			</form>
			<div className="flex gap-2 my-2">
				<p>Dont have an account?</p>

				<Link to="/sign-up">
					<span className="text-blue-700 hover:underline">
						Sign up
					</span>
				</Link>
			</div>
			{error && <p className="text-red-500 mt-5 text-center">{error}</p>}
		</div>
	);
}
