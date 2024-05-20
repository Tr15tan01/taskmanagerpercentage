"use client";

import CardComponent from "@/components/cardComponent";
import ModalComponent from "@/components/modalComponent";
// import Image from "next/image";
import { getUsers } from "@/utile/db2";
import { getTasks } from "@/utile/db";
import { useEffect, useState } from "react";
import { main } from "@/utile/db2";
import NavBar from "@/components/navBar";
import { updateUser } from "@/utile/db3";

// const data = [
//   {
//     title: "task number one",
//     description: "dot this task as possible or you will not do it",
//     subtasks: [{ subtitle: "do this one thing once more", completed: true }],
//   },
//   {
//     title: "task number two",
//     description: "another desctitipn lorem other ipsim wow",
//     subtasks: [
//       { subtitle: "do this one thing twice more", completed: false },
//       { subtitle: "another subtask complete asap", completed: true },
//     ],
//   },
// ];

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   console.log("effect");
  //   getCars().then((data) => {
  //     console.log(data.Items[1].name, "aws dynamo data");
  //     // res.send("project success " + data.Items[1].name);
  //     console.log("second console.");
  //   });
  // }, []);

  // useEffect(() => {
  //   console.log("effect");
  //   getTasks().then((data) => {
  //     console.log(data.Items[2].title, "aws dynamo data");
  //     // res.send("project success " + data.Items[1].name);
  //     console.log("second console.");
  //   });
  // }, []);
  useEffect(() => {
    console.log("effect", process.env.API_KEY);
    // getUsers().then((data) => {
    //   console.log(data.Items[2], "aws dynamo data");
    //   // setData(data);
    //   // res.send("project success " + data.Items[1].name);
    //   // console.log("second console.");
    // });

    // updateUser();

    const fetchData = async () => {
      const data = await getUsers();
      console.log("data is ", data.Items[0]);
      setData(data.Items[1]);
      setLoading(false);
      return data;
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log("writing effect");
  //   main("corvette");
  // });
  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div className="container mx-auto text-center pt-6">
      <NavBar user={data.name} />
      <h1 className="prose-lg">Start first Task</h1>
      <p className="mt-9">Press the button to add new task: </p>
      <div className="container mx-auto px-4  flex justify-center">
        <button
          className="btn w-full btn-secondary mt-9 text-white shadow-xl"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Add New Task
        </button>
        <ModalComponent />
      </div>
      <div className="container p-6">
        {data.tasks.map(({ title, description, subtasks }) => {
          return (
            <CardComponent
              key={title}
              title={title}
              description={description}
              subtasks={subtasks}
            />
          );
        })}
      </div>
    </div>
  );
}
