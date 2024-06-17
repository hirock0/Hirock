"use client";
import { useEffect, useState } from "react";
import Style from "./login.module.css";
import { BsGoogle,} from "react-icons/bs";
import { Bitter } from "next/font/google";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
const bitter = Bitter({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Login = () => {
  const router = useRouter();
  const [logindata, setLogindata] = useState({
    emailOrnumber: "",
    password: "",
  });
  const [eyeflag, setEyeFlag] = useState(false);
  const [disablebtn, setDisablebtn] = useState(true);

  const googleLogin = async () => {
    await signIn("google", {
      callbackUrl: "/",
      redirect: true,
    });
  };

  const onFormData = async (e: any) => {
    e.preventDefault();
    try {
      const sendData = await axios.post("/pages/api/login", logindata);
      if (sendData.data.success) {
        toast.success("Lgin successful");
        router.push("/");
        router.refresh();
      } else {
        toast.success("something went wrong");
      }
    } catch (error: any) {
      toast.success("something went wrong");
    }
  };

  const validity = () => {
    if (logindata.emailOrnumber == "" && logindata.password == "") {
      setDisablebtn(false);
    } else {
      setDisablebtn(true);
    }
  };

  useEffect(() => {
    validity();
  }, [logindata.emailOrnumber, logindata.password]);

  return (
    <main
      id={Style.main}
      className={`${bitter.className} 
       flex items-center justify-center max-sm:pt-28 pt-40 pb-40`}
    >
      <div
        id={Style.insideMain_DIv}
        className=" sm:w-3/5 sm:h-4/5  lg:w-2/5 lg:h-4/5  md:w-3/5 md:h-4/5 max-sm:w-4/5  rounded-md  p-4 backdrop:filter backdrop-blur-3xl "
      >
        <h1 className=" text-center">Login Please</h1>

        <form onSubmit={onFormData} className=" mt-5 max-sm:text-xs ">
          <div className="  ">
            <div>
              <h1>Enter Email or Number</h1>
              <input
                value={logindata.emailOrnumber}
                onChange={(e) =>
                  setLogindata({ ...logindata, emailOrnumber: e.target.value })
                }
                type="text"
                name="email"
                id="email"
                placeholder="Email or Number"
                className=" mt-2 w-full h-8 pl-2 rounded-md md:h-12"
              />
            </div>
            <div className=" mt-5">
              <h1>Enter Password</h1>
              <input
                value={logindata.password}
                onChange={(e) =>
                  setLogindata({ ...logindata, password: e.target.value })
                }
                type={`${!eyeflag ? "password" : "text"}`}
                name="password"
                id="password"
                placeholder="Password"
                className=" mt-2 w-full h-8 pl-2 rounded-md md:h-12"
              />
            </div>

            <div className=" my-5">
              <input
                onClick={() => setEyeFlag(!eyeflag)}
                type="checkbox"
                name="checkbox"
              />
            </div>

            <div className=" flex items-center justify-center mt-5">
              <button
                type="submit"
                className=" w-full h-8 rounded-md bg-slate-700 hover:bg-slate-800 active:bg-slate-950 md:h-12"
              >
                Login
              </button>
            </div>
          </div>
        </form>

        <div className=" w-full h-full">
          {/* divider_start */}
          <div className=" flex text-nowrap items-center  mt-5">
            <div className=" w-full border-t "></div>
            <h1 className="p-2">Login With</h1>
            <div className=" w-full border-t"></div>
          </div>

          {/* divider_start */}
          <div className=" flex items-center justify-center mt-5 gap-5">
            <button
              onClick={googleLogin}
              disabled={disablebtn}
              className={` w-full h-8 rounded-md flex items-center justify-center ${
                disablebtn
                  ? " opacity-40  bg-slate-600"
                  : "bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900"
              } `}
            >
              <BsGoogle />
            </button>
          </div>
          <div className=" flex items-center justify-center mt-5">
            <Link
              id={Style.createNewbutton}
              href={"/user/signup"}
              className=" bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-800 w-full h-8 rounded-md flex items-center justify-center"
            >
              <button className="">Create New</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
