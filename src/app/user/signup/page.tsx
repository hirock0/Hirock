"use client";
import { useCallback, useEffect, useState } from "react";
import Style from "./signup.module.css";
import { Bitter } from "next/font/google";
import Image from "next/image";
import toast from "react-hot-toast";
import { nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AllbackendData } from "@/redux/slices/slice";
import { useRouter } from "next/navigation";
const bitter = Bitter({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Signup: React.FC = () => {
  const router = useRouter();

  const [signupdata, setSignupdata] = useState({
    nanoId: "",
    name: "",
    emailOrnumber: "",
    password: "",
    reTypePassword: "",
    image: "",
    recentDate: "",
  });
  const [loginbtnflag, setLoginBtnflag] = useState(true);
  const [eyeflag, setEyeFlag] = useState(false);
  const dispatch = useDispatch();
  const useselector = useSelector((state: any) => state.slice);
  const imageHandler = (e: any) => {
    try {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (result: any) => {
        setSignupdata({ ...signupdata, image: result.target.result });
      };
      reader.onerror = (error: any) => {
        toast.success(error);
      };
    } catch (error: any) {
      toast.success("Something went wrong");
    }
  };

  const nanoIdAnddate = useCallback(() => {
    const reqDate = new Date();
    const date = reqDate.toLocaleDateString();
    const NanoId = nanoid();
    setSignupdata({ ...signupdata, nanoId: NanoId, recentDate: date });
  }, [signupdata.nanoId, signupdata.recentDate]);

  const onFormData = async (e: any) => {
    console.log(signupdata);
    e.preventDefault();
    try {
      if (
        signupdata.name == "" ||
        signupdata.emailOrnumber == "" ||
        signupdata.password == "" ||
        signupdata.reTypePassword == ""
      ) {
        toast.success("Fill the all field");
      } else if (signupdata.password !== signupdata.reTypePassword) {
        toast.success("Password does not match!");
      } else {
        await axios.post("/pages/api/signup", signupdata);
        toast.success("signup successful");
        router.push("/");
        router.refresh();
      }
    } catch (error: any) {
      toast.success("something went wrong");
    }
  };

  const abldDisableBtn = () => {
    if (
      signupdata.name.length !== 0 &&
      signupdata.emailOrnumber.length !== 0 &&
      signupdata.password.length !== 0 &&
      signupdata.reTypePassword.length !== 0
    ) {
      setLoginBtnflag(false);
    } else {
      setLoginBtnflag(true);
    }
  };

  useEffect(() => {
    nanoIdAnddate();
    dispatch(AllbackendData());
  }, []);

  useEffect(() => {
    abldDisableBtn();
  }, [signupdata, loginbtnflag]);

  return (
    <main
      id={Style.main}
      className={`${bitter.className} flex items-center justify-center pt-24 pb-20 `}
    >
      <div className=" w-full flex items-center justify-center">
        <div
          id={Style.insideMain_DIv}
          className=" sm:w-3/5 sm:h-4/5  lg:w-2/5 lg:h-4/5  md:w-3/5 md:h-4/5 max-sm:w-4/5  rounded-md  p-4 backdrop:filter backdrop-blur-3xl "
        >
          <h1 className=" text-center">SignUp Please</h1>

          <form onSubmit={onFormData} className=" mt-5 max-sm:text-xs ">
            <div className="  ">
              <div>
                <h1>Name</h1>
                <input
                  value={signupdata.name}
                  onChange={(e) =>
                    setSignupdata({ ...signupdata, name: e.target.value })
                  }
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className=" mt-2 w-full h-8 pl-2 rounded-md md:h-12"
                />
              </div>

              <div className=" mt-5">
                <h1>Enter Email or Number</h1>
                <input
                  value={signupdata.emailOrnumber}
                  onChange={(e) =>
                    setSignupdata({
                      ...signupdata,
                      emailOrnumber: e.target.value,
                    })
                  }
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email or Number"
                  className=" mt-2 w-full h-8 pl-2 rounded-md md:h-12"
                />
              </div>
              <div className=" mt-5 relative">
                <h1>Enter Password</h1>
                <input
                  value={signupdata.password}
                  onChange={(e) =>
                    setSignupdata({ ...signupdata, password: e.target.value })
                  }
                  type={`${!eyeflag ? "password" : "text"}`}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className=" mt-2 w-full h-8 pl-2 rounded-md md:h-12"
                />
              </div>

              <div className=" mt-5">
                <h1> Re_type Password</h1>
                <input
                  value={signupdata.reTypePassword}
                  onChange={(e) =>
                    setSignupdata({
                      ...signupdata,
                      reTypePassword: e.target.value,
                    })
                  }
                  type={`${!eyeflag ? "password" : "text"}`}
                  name="reTypepassword"
                  placeholder="Re_type Password"
                  id="retypePassword"
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

              <div className=" mt-5">
                <h1>Image(Optional)</h1>
                <input
                  onChange={imageHandler}
                  accept="image/**"
                  id="userImage"
                  name="userImage"
                  type="file"
                  className=" mt-2 w-full h-8 pl-2 rounded-md md:h-12"
                />
              </div>

              {signupdata.image !== "" ? (
                <div className=" flex items-center justify-center mt-5">
                  <Image
                    src={signupdata.image}
                    alt="userImage"
                    width={100}
                    height={100}
                  />
                </div>
              ) : null}

              <div className=" flex items-center justify-center mt-5">
                <button
                  disabled={loginbtnflag}
                  type="submit"
                  className={`${
                    loginbtnflag
                      ? "w-full h-8 rounded-md  bg-slate-800 opacity-30 md:h-12"
                      : "w-full h-8 rounded-md bg-slate-700 hover:bg-slate-800 active:bg-slate-950 md:h-12"
                  } `}
                >
                  {`${loginbtnflag ? "fill up" : "Login"}`}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Signup;
