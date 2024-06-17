"use client";
import Image from "next/image";
import Link from "next/link";
import Style from "./nav.module.css";
import { Roboto_Slab } from "next/font/google";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllbackendData } from "@/redux/slices/slice";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
const roboto_slab = Roboto_Slab({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const sideMenuDetaills = [
  {
    id: 0,
    title: "My Profile",
    icon: "/all_svg/user-line.svg",
    pathlink: "",
  },
  {
    id: 1,
    title: "My Classes",
    icon: "/all_svg/my-classes.svg",
    pathlink: "",
  },
  {
    id: 2,
    title: "Concept Crackerz",
    icon: "/all_svg/concept_crackerz.svg",
    pathlink: "",
  },
  {
    id: 3,
    title: "Bookmarks",
    icon: "/all_svg/bookmark.svg",
    pathlink: "",
  },
  {
    id: 4,
    title: "Leadboard",
    icon: "/all_svg/leaderboard.svg",
    pathlink: "",
  },
  {
    id: 5,
    title: "Announcement",
    icon: "/all_svg/announcement.svg",
    pathlink: "",
  },
  {
    id: 6,
    title: "Helpdesk",
    icon: "/all_svg/help-desk.svg",
    pathlink: "",
  },
];

const NavBar = () => {
  const router = useRouter();
  const sessionData = useSession();
  const authUser = sessionData.data?.user || null;
  const [sideNavFlag, setSideNavFlag] = useState(false);
  const [profileSideflag, setProfileSideflag] = useState(false);
  const [profileRightSideflag, setProfileRightSideflag] = useState(false);
  const [logoutPopup, setLogoutPopup] = useState(false);
  const useselector = useSelector((state: any) => state.slice?.data || "");
  const dispatch = useDispatch();

  const windowEvent = useCallback(() => {
    const MenuLine = document.querySelector(".menuLine") as HTMLElement;
    const SideNav = document.querySelector(".sideNav") as HTMLElement;
    const profileSidenav = document.querySelector(
      ".profilesideNav"
    ) as HTMLElement;
    const ProfileRightSidenav = document.querySelector(
      ".profileRightsideNav"
    ) as HTMLElement;
    document.addEventListener("click", (e: any) => {
      if (!MenuLine.contains(e.target) && !SideNav.contains(e.target)) {
        setSideNavFlag(false);
      }
      if (
        !profileSidenav.contains(e.target) &&
        e.target.id !== "ProfileSideNavBtn"
      ) {
        setProfileSideflag(false);
      }
      if (
        !ProfileRightSidenav.contains(e.target) &&
        e.target.id !== "ProfileRightSideNavBtn"
      ) {
        setProfileRightSideflag(false);
      }
    });
  }, [sideNavFlag]);
  const onLogout = async () => {
    try {
      const logout = await axios.get("/pages/api/logout");
      if (logout.data.success) {
        toast.success("logout successful");
        router.push("/");
        router.refresh();

        setTimeout(() => {
          setProfileSideflag(false);
          setLogoutPopup(false)
        }, 1000);
      }
    } catch (error: any) {
      toast.success("Something went wrong");
    }
  };

  useEffect(() => {
    windowEvent();
    dispatch(AllbackendData());
  }, []);

  return (
    <main>
      <nav
        id={Style.Nav}
        className=" topNav fixed flex justify-between items-center pr-10 pl-10  z-50 top-0 left-0 w-full h-20 backdrop:filter backdrop-brightness-150 backdrop-blur-md opacity-100 text-white "
      >
        <div className=" relative w-1/2 flex items-center gap-0">
          {/* left_Profile_section_star */}
          <div id={Style.leftProfileDivAll} className=" ">
            {useselector.loggeduser == undefined && authUser == null ? (
              <div
                id={Style.InfinelogoInbigScreen}
                className="w-12 h-12  object-cover"
              >
                <Image
                  id={Style.infinitelogo}
                  src={"/images/infinite_logo.png"}
                  alt="logo"
                  width={500}
                  height={500}
                />
              </div>
            ) : useselector.loggeduser == undefined && authUser !== null ? (
              <div className="">
                <div
                  className={`${Style.leftProfileBtn} w-12 h-12 lg:hidden object-cove cursor-pointer`}
                  onClick={() => setProfileSideflag(!profileSideflag)}
                >
                  <Image
                    id="ProfileSideNavBtn"
                    src={authUser?.image || ""}
                    alt="profile"
                    width={500}
                    height={500}
                    className=" rounded-full"
                  />
                </div>
                <div
                  id={Style.InfinelogoInbigScreen}
                  className="w-12 h-12  hidden lg:block object-cover"
                >
                  <Image
                    id={Style.infinitelogo}
                    src={"/images/infinite_logo.png"}
                    alt="logo"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            ) : (
              <div className="">
                <div
                  className={`${Style.leftProfileBtn} w-12 h-12 lg:hidden cursor-pointer`}
                  onClick={() => setProfileSideflag(!profileSideflag)}
                >
                  <Image
                    id="ProfileSideNavBtn"
                    src={useselector.loggeduser?.image || ""}
                    alt="profile"
                    width={500}
                    height={500}
                    className=" rounded-full"
                  />
                </div>
                <div
                  id={Style.InfinelogoInbigScreen}
                  className="w-12 h-12 hidden lg:block object-cover"
                >
                  <Image
                    id={Style.infinitelogo}
                    src={"/images/infinite_logo.png"}
                    alt="logo"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            )}
          </div>
          {/* left_Profile_section_end */}

          <div
            id={Style.ProfileTextDiv}
            className="flex items-center justify-center absolute left-16 top-0 invisible lg:visible h-full  "
          >
            <h1 id={Style.portfolioText} className={roboto_slab.className}>
              Hirock Portfolio<span className=" font-semibold">.</span>
            </h1>
          </div>
        </div>
        <div>
          {sideNavFlag ? (
            <Image
              id={Style.MenuLineClose}
              onClick={() => setSideNavFlag(!sideNavFlag)}
              className=" menuLine lg:hidden "
              src={"/all_svg/close-fill.svg"}
              alt="hamb"
              width={35}
              height={35}
            />
          ) : (
            <Image
              id={Style.MenuLine}
              onClick={() => setSideNavFlag(!sideNavFlag)}
              className=" menuLine lg:hidden "
              src={"/all_svg/hamb.svg"}
              alt="hamb"
              width={22}
              height={22}
            />
          )}

          {/* fullscreen_nav_start */}
          <div className=" flex items-center hidden lg:block">
            <ul id={Style.navUl} className=" flex gap-16">
              <Link href={"/"}>
                <li>Home</li>
              </Link>
              <Link href={"/info/products"}>
                <li>Products</li>
              </Link>
              <Link href={"/info/about_us"}>
                <li>About</li>
              </Link>
              <Link href={"/info/successes"}>
                <li>Successes</li>
              </Link>

              {/* right_profile_start */}
              {useselector.loggeduser == undefined && authUser == null ? (
                <Link href={"/user/login"}>
                  <li>Login</li>
                </Link>
              ) : useselector.loggeduser == undefined || authUser !== null ? (
                <li className={`${Style.rightProfileLi} hidden lg:block`}>
                  <button
                    className={`${Style.RightprofileBtn} w-12 h-full flex items-center justify-center`}
                    onClick={() =>
                      setProfileRightSideflag(!profileRightSideflag)
                    }
                  >
                    <Image
                      id="ProfileRightSideNavBtn"
                      src={authUser?.image || ""}
                      alt="profile"
                      width={500}
                      height={500}
                      className=" rounded-full"
                    />
                  </button>
                </li>
              ) : (
                <li className={`${Style.rightProfileLi} hidden lg:block`}>
                  <button
                    className={`${Style.RightprofileBtn} w-12 h-full flex items-center justify-center`}
                    onClick={() =>
                      setProfileRightSideflag(!profileRightSideflag)
                    }
                  >
                    <Image
                      id="ProfileRightSideNavBtn"
                      src={useselector.loggeduser.image || ""}
                      alt="profile"
                      width={500}
                      height={500}
                      className=" rounded-full"
                    />
                  </button>
                </li>
              )}
              {/* right_profile_start */}
            </ul>
          </div>
          {/* fullscreen_nav_send */}
          {/* ......................................................... */}
        </div>
        {/* side_Menu_start */}
        <div
          id={Style.sideNavmain}
          style={{ transition: "0.5s" }}
          className={` sideNav pr-5 pl-5 absolute lg:hidden  top-20 w-full left-0  ${
            sideNavFlag ? "translate-x-0" : "translate-x-full"
          } `}
        >
          <ul
            id={Style.sideNavUl}
            className=" pl-5 pr-5 rounded-md flex flex-col backdrop:filter backdrop-blur-3xl opacity-100 h-full w-full bg-slate-900/95 pb-5"
          >
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/info/products"}>
              <li>Products</li>
            </Link>
            <Link href={"/info/about_us"}>
              <li>About</li>
            </Link>
            <Link href={"/info/successes"}>
              <li>Success</li>
            </Link>
            {useselector.loggeduser !== undefined ||
            authUser !== null ? null : (
              <Link href={"/user/login"}>
                <li>Login</li>
              </Link>
            )}
          </ul>
        </div>
        {/* side_Menu_end */}
      </nav>

      {/* Profile_left_side_start */}
      <div
        id={Style.ProfileLeftSideBar}
        style={{ transition: ".5s" }}
        className={` ${
          !profileSideflag ? "-translate-x-full " : "translate-x-0"
        } profilesideNav p-5 max-sm:p-2 fixed z-50 top-0  h-full w-52 max-sm:w-40 max-sm:text-xs backdrop:filter backdrop-blur-3xl lg:hidden`}
      >
        {/* profile_info_start */}
        <div
          id={Style.profileInfoDivLeft}
          className=" overflow-y-scroll pb-20  "
        >
          {/* profile_top_section_start */}
          <div className=" border-b-2 p-2 flex flex-col items-center">
            {/* profile_image_start */}
            <div className="">
              {useselector.loggeduser == undefined &&
              authUser == null ? null : useselector.loggeduser == undefined &&
                authUser !== null ? (
                <div className=" w-14 h-14">
                  <Image
                    src={authUser?.image || ""}
                    alt="profile"
                    width={500}
                    height={500}
                    className=" rounded-full"
                  />
                </div>
              ) : (
                <div className=" w-14 h-14">
                  <Image
                    src={useselector.loggeduser?.image || ""}
                    alt="profile"
                    width={500}
                    height={500}
                    className=" rounded-full"
                  />
                </div>
              )}
            </div>
            {/* profile_image_end */}
            <div>
              {useselector.loggeduser == undefined &&
              authUser == null ? null : useselector.loggeduser == undefined &&
                authUser !== null ? (
                <div id={Style.profileText} className="">
                  <h1>{authUser?.name || ""}</h1>
                </div>
              ) : (
                <div id={Style.profileText} className="">
                  <h1>{useselector.loggeduser?.name || ""}</h1>
                </div>
              )}
            </div>
          </div>
          {/* profile_topsection_end */}
          {/* nav_details_start */}
          <div className=" mt-5">
            <div id={Style.NavdetailsUl} className=" flex flex-col gap-5">
              {sideMenuDetaills.map((item: any) => (
                <div id={Style.everyLi} key={item.id} className=" ">
                  <div className="  text-xs gap-3 flex items-center">
                    <div className=" w-7 h-7 flex items-center ">
                      <Image
                        src={item.icon}
                        alt="profile"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="">
                      <Link href={item.pathlink}>
                        <div>
                          <h1>{item.title}</h1>
                        </div>
                      </Link>
                    </div>
                  </div>
                  {/* divider_start */}
                  <div id={Style.Divider} className=""></div>
                  {/* divider_end */}
                </div>
              ))}
            </div>
          </div>
          {/*nav_details_end  */}
          {/* logout_start */}
          <div className=" mt-10 flex items-center justify-center">
            {authUser !== null ? (
              // auth_LogoutBtn_start
              <div
                className="  cursor-pointer flex items-center gap-3"
                id={Style.logoutBtn}
                onClick={() => setLogoutPopup(!logoutPopup)}
              >
                <div className=" w-8 h-8">
                  <Image
                    src={"/all_svg/logout.svg"}
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>
                <div className="">
                  <h1>Logout</h1>
                </div>
              </div>
            ) : (
              // auth_LogoutBtn_end
              // LogoutBtn_start
              <div
                className="cursor-pointer flex items-center gap-3"
                id={Style.logoutBtn}
                onClick={() => setLogoutPopup(!logoutPopup)}
              >
                <div className=" w-8 h-8">
                  <Image
                    src={"/all_svg/logout.svg"}
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>
                <div className="">
                  <h1>Logout</h1>
                </div>
              </div>
              // LogoutBtn_end
            )}
          </div>
        </div>
        {/* logout_end */}
        {/* profile_info_end */}
      </div>
      {/* Profile_left_side_end */}
      {/* ---------------------------------------------------------------- */}
      {/* Profile side_right_nav */}
      <div
        id={Style.ProfileRightSideBar}
        style={{ transition: ".5s" }}
        className={` ${
          !profileRightSideflag ? "translate-x-full " : "translate-x-0"
        } profileRightsideNav p-5  fixed right-0 z-50 top-20  h-full w-52 backdrop:filter backdrop-blur-3xl hidden lg:block`}
      >
        {/* profile_info_start */}
        <div
          id={Style.profileInfoDivLeft}
          className=" overflow-y-scroll pb-20  "
        >
          {/* profile_top_section_start */}
          <div className=" border-b-2 p-2 flex flex-col items-center">
            {/* profile_image_start */}
            <div className="">
              {useselector.loggeduser == undefined &&
              authUser == null ? null : useselector.loggeduser == undefined &&
                authUser !== null ? (
                <div className=" w-14 h-14">
                  <Image
                    src={authUser?.image || ""}
                    alt="profile"
                    width={500}
                    height={500}
                    className=" rounded-full"
                  />
                </div>
              ) : (
                <div className=" w-14 h-14">
                  <Image
                    src={useselector.loggeduser?.image || ""}
                    alt="profile"
                    width={500}
                    height={500}
                    className=" rounded-full"
                  />
                </div>
              )}
            </div>
            {/* profile_image_end */}
            <div>
              {useselector.loggeduser == undefined &&
              authUser == null ? null : useselector.loggeduser == undefined &&
                authUser !== null ? (
                <div id={Style.profileText} className="">
                  <h1>{authUser?.name || ""}</h1>
                </div>
              ) : (
                <div id={Style.profileText} className="">
                  <h1>{useselector.loggeduser?.name || ""}</h1>
                </div>
              )}
            </div>
          </div>
          {/* profile_topsection_end */}
          {/* nav_details_start */}
          <div className=" mt-5">
            <div id={Style.NavdetailsUl} className=" flex flex-col gap-5">
              {sideMenuDetaills.map((item: any) => (
                <div id={Style.everyLi} key={item.id} className=" ">
                  <div className="  text-xs gap-3 flex items-center">
                    <div className=" w-7 h-7 flex items-center ">
                      <Image
                        src={item.icon}
                        alt="profile"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="">
                      <Link href={item.pathlink}>
                        <div>
                          <h1>{item.title}</h1>
                        </div>
                      </Link>
                    </div>
                  </div>
                  {/* divider_start */}
                  <div id={Style.Divider} className=""></div>
                  {/* divider_end */}
                </div>
              ))}
            </div>
          </div>
          {/*nav_details_end  */}

          {/* logout_start */}
          <div className=" mt-10 flex items-center justify-center">
            {authUser !== null ? (
              // auth_LogoutBtn_start
              <div
                className="cursor-pointer flex items-center gap-3"
                id={Style.logoutBtn}
                onClick={() => setLogoutPopup(!logoutPopup)}
              >
                <div className=" w-8 h-8">
                  <Image
                    src={"/all_svg/logout.svg"}
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>
                <div className="">
                  <h1>Logout</h1>
                </div>
              </div>
            ) : (
              // auth_LogoutBtn_end
              // LogoutBtn_start
              <div
                className="cursor-pointer flex items-center gap-3"
                id={Style.logoutBtn}
                onClick={() => setLogoutPopup(!logoutPopup)}
              >
                <div className=" w-8 h-8">
                  <Image
                    src={"/all_svg/logout.svg"}
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>
                <div className="">
                  <h1>Logout</h1>
                </div>
              </div>
              // LogoutBtn_end
            )}
          </div>
        </div>
        {/* logout_end */}

        {/* profile_info_end */}
      </div>
      {/* Profile side_right_nav */}



      {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
      {/* logout_popup_start */}

      <div
        onClick={() => setLogoutPopup(false)}
        className={` ${
          !logoutPopup ? "invisible" : "visible"
        } flex items-center justify-center  fixed top-0 left-0 w-full h-full max-sm:pr-10 max-sm:pl-10 bg-slate-800/80 z-50`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className=" flex-col gap-5 rounded-md backdrop:filter backdrop-blur-3xl opacity-90 flex items-center justify-center  max-sm:w-full  max-sm:h-52 w-96 h-96  "
        >
          <h1>Do you want to logout?</h1>
          <div id={Style.logoutBtnAndcanceldiv} className=" flex gap-4">
            <button
              onClick={() => setLogoutPopup(!logoutPopup)}
              className=" w-32 rounded-md h-8 max-sm:w-20"
            >
              cancel
            </button>

            {authUser !== null ? (
              <button
                onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
                className=" w-32 rounded-md h-8 max-sm:w-20"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={onLogout}
                className=" w-32 rounded-md h-8 max-sm:w-20"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>

      {/* logout_popup_end */}
    </main>
  );
};

export default NavBar;
