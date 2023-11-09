import Image from "next/image";

import logo from "../../public/spotify (2).png";

import facebook from "../../public/facebook.png";

import googleLogo from "../../public/icons8-google-48.png";

import apple from "../../public/apple-big-logo.png";

import "../styles/page.css";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col w-96 h-fit border-2 border-black  bg-black rounded-3xl">
      <div className="flex items-center mt-7">
        <Image src={logo} alt="Logo" className="w-9 h-9 mt-1 " />
        <h2 className="text-3xl">Spotify</h2>
      </div>
      <p className="mt-6 mb-6 text-2xl ">Login in to continue.</p>
      <form className="flex items-center justify-center flex-col">
        <input
          type="email"
          placeholder="your email"
          className="border-none m-3 p-2 rounded-xl placeholder: text-center text-black"
        />
        <input
          type="password"
          placeholder="your password"
          className="border-white m-3 p-2 rounded-xl placeholder: text-center text-black"
        />
        <br />
        <a href="#" className="border-b-2 font-bold">
          Reset password
        </a>
        <br />
        <div className="flex">
          <p className="mr-20 font-bold">Remember-me</p>
          <input type="checkbox" />
        </div>
        <br />

        <button className="border-2 text-2xl pr-10 pl-10 pt-1 pb-1 rounded-3xl bg-white text-black font-semibold hover:bg-black hover:text-white transition-all duration-500">LOG IN</button>

        <br />
        <p className="font-bold text-xl">---------- Or ----------</p>
        <br />
      </form>

      <nav className="flex flex-col items-center">
        <div className="border-2 flex pr-8 pl-8 pt-2 pb-2 rounded-3xl items-center cursor-pointer ">
          <Image src={facebook} alt="Logo" className="w-5 h-5 mr-3" />
          <ul>
            <li>
              <a href="#">Continue with Facebook</a>
            </li>
          </ul>
        </div>
        <br />
        <div className="border-2 flex pr-10 pl-10 pt-2 pb-2 rounded-3xl items-center cursor-pointer ">
          <Image src={googleLogo} alt="Logo" className="w-5 h-5 mr-3" />
          <ul>
            <li>
              <a href="#" className="ml-1">Continue with Google</a>
            </li>
          </ul>
        </div>
        <br />
        <div  className="border-2 flex pr-11 pl-11 pt-2 pb-2 rounded-3xl items-center cursor-pointer ">
          <Image src={apple} alt="Logo" className="w-5 h-5 mr-3" />
          <ul>
            <li>
              <a href="#" className="ml-1">Continue with Apple</a>
            </li>
          </ul>
        </div>
        <br />
        <p>
          Don't have an account?
          <a href="#" className="font-bold">Sing-Up</a>
        </p>
        <br />
        <a href="#" className="border-b-2">
          Settings
        </a>
        <br />
      </nav>
    </main>
  );
}
