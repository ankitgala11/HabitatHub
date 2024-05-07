import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleGoogleSignin = async () => {
		try {
			const provider = new GoogleAuthProvider();
			const auth = getAuth(app);
			const result = await signInWithPopup(auth, provider);
			console.log(result);

			const res = await fetch("/api/auth/google", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					name: result.user.displayName,
					email: result.user.email,
					photo: result.user.photoURL,
				}),
			});

			const data = await res.json();
			dispatch(signInSuccess(data));
			navigate("/");
		} catch (error) {
			console.log("Cannot sign in with Google", error);
		}
	};
	return (
		<button
			type="button"
			onClick={handleGoogleSignin}
			className="bg-red-700 p-3 rounded-lg text-white hover:opacity-85 uppercase"
		>
			Continue with Google
		</button>
	);
}
