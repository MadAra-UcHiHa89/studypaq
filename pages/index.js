import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { AiFillBook } from "react-icons/ai";
import Layout from "../components/Layout";

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/reddit");
  const data = await res.json();
  return {
    props: {
      post: data,
    },
  };
}

export default function Home(props) {
  console.log("props", props);
  return (
    <div
      styles={{
        backgroundColor: "#FFDEE9",
        backgroundImage: "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)",
      }}
      className="w-full mx-auto my-2 mainD "
    >
      <nav className="flex justify-between p-4">
        <div>
          {/* <AiFillBook className="fill-current" /> */}
          <span className="text-blue-600 text-xl font-bold">StudyPaq</span>
        </div>
        <div className="flex space-x-6 justify-center ">
          <div className="flex space-x-4 font-bold items-center">
            <span>
              <a href="https://www.studypaq.com/#"> Schools</a>
            </span>
            <span>
              <a href="https://www.instagram.com/studypaq.inc/">About</a>{" "}
            </span>
            <span>
              <a href="https://www.studypaq.com/#"> Courses</a>
            </span>
          </div>
          <div className="flex space-x-4 items-center">
            <button className="bg-blue-600 p-2 font-semibold text-white rounded-full w-16">
              Login
            </button>
            <button className="bg-gray-300 p-2 font-semibold  rounded-full w-20">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
      <div className="flex flex-col justify-center pt-8 mt-8">
        <div className="flex justify-center bold text-5xl font-bold">
          Get your Next
        </div>
        <div className="flex justify-center bold text-6xl font-semibold text-blue-900">
          Courses
        </div>
        <div className="flex justify-center space-x-2 py-12">
          <span className="w-2 h-2 bg-blue-900 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
        </div>
      </div>

      <Layout post={props.post} />

      {/* <div className="grid grid-cols-7 gap-4">
        <div className="flex flex-col space-y-4 transform translate-y">
          {props.post.map((imgUrl) => {
            return (
              <img
                className=" object-cover rounded-xl h-66"
                src={imgUrl}
                alt=""
              />
            );
          })}
        </div>
      </div> */}
      <div className="flex justify-center fixed inset-x-0 bottom-2">
        <div className="bg-blue-500 h-12 w-12 rounded-full flex justify-center items-center shadow-sm text-white animate-bounce">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
