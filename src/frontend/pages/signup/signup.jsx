import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { handleSignup } from "frontend/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import useToast from "frontend/custom/useToast";

export default function SignUp() {
  const { isLogged } = useSelector((store) => store.auth);
  const [userEmail, setUserEmail] = useState();
  const [userName, setUserName] = useState();
  const [userPassword, setUserPassword] = useState();
  const [checkPassword, setCheckPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(handleSignup({ userName, userEmail, userPassword }));
  };

  useEffect(() => {
    if (isLogged === true) {
      navigate("/");
      showToast("Successfully Sign Up", "success");
    }
  });

  return (
    <>
      <section className="flex w-full min-h-screen justify-around items-center">
        <div className="flex flex-col w-3/6">
          <Link to="/">
            <img
              src="/assets/spectrum.png"
              alt="profile pic"
              className="w-14 h-14 rounded-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ml-6"
            />
          </Link>
          <h1 className="text-8xl font-semibold z-10 px-4 py-4 mb-16">
            Spectrum, <span className="text-purple">Connect</span> with the
            world...
          </h1>
          <img
            className="animate-bounce rounded-xl w-full"
            src="https://picsum.photos/id/1067/2500/800"
            alt="logo"
          />
        </div>
        <div className="flex flex-col rounded-xl gap-4 overflow-hidden shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] w-2/6">
          <h2 className="flex items-center justify-center py-4 bg-grey text-2xl font-semibold">
            Sign-Up
          </h2>
          <form id="form" className="flex flex-col px-6 py-6 gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="border-grey border rounded-md py-1 px-2"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="border-grey border rounded-md py-1 px-2"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="border-grey border rounded-md py-1 px-2"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="checkpassword">Check Password</label>
              <input
                type="password"
                id="checkpassword"
                placeholder="Check Password"
                className="border-grey border rounded-md py-1 px-2"
                value={checkPassword}
                onChange={(e) => setCheckPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-4 items-center justify-center">
              <button
                className="text-center font-medium text-xl bg-black text-white w-full rounded-xl py-2 px-2 cursor-pointer"
                title="Signup"
                onClick={handleSignUp}
              >
                Sign-Up
              </button>
              <Link
                to="/login"
                className="flex gap-3 items-center justify-center text-center font-medium text-xl bg-black text-white w-full rounded-xl py-2 px-2 cursor-pointer"
                title="Go to Login"
              >
                <button>Log In</button>
                <BsFillArrowRightCircleFill />
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
