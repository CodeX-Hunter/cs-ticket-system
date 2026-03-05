import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import { GoDotFill } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { toast, ToastContainer } from "react-toastify";


function App() {
  const [tickets, setTickets] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [resolvedTask, setResolvedTask] = useState([]);

  const handleTask = (ticket) => {
    const exist = tasks.find(
      (ticketID) => ticketID.ticket_number === ticket.ticket_number,
    );
    if (exist) {
      return toast("Task Already Added", {position: "top-center", theme:"dark"})
    }
    setTasks([...tasks, ticket]);

    const updateTickets = tickets.map((t) =>
      t.ticket_number === ticket.ticket_number
        ? { ...t, status: "In-Progress" }
        : t,
    );
    setTickets(updateTickets);
     return  toast(`${ticket.ticket_number} Ticket In Progress`, {position: "top-center", theme:"dark"})
  };

  const handleResolvedTask = (task) => {
    setResolvedTask([...resolvedTask, task]);
    const newTickets = tickets.filter(
      (ticket) => ticket.ticket_number !== task.ticket_number,
    );
    const newTasks = tasks.filter(
      (t) => t.ticket_number !== task.ticket_number,
    );

    setTasks(newTasks);
    setTickets(newTickets);
    return  toast(`${task.ticket_number} Task Resolved`, {position: "top-center", theme:"dark"})
  };

  useEffect(() => {
    const customerTicket = async () => {
      const res = await fetch("/support-ticket.json");
      const data = await res.json();
      setTickets(data);
    };
    customerTicket();
  }, []);

  return (
    <>
      <Navbar />
      <Banner tasks={tasks} resolvedTask={resolvedTask} />
      <section className="grid grid-cols-3 py-4 gap-6">
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <h1 className="text-3xl font-semibold mt-10  col-span-1">
            Customer Tickets
          </h1>
          <div className="col-span-2 grid grid-cols-2 gap-6">
            {tickets?.map((ticket) => (
              <div
                onClick={() => handleTask(ticket)}
                key={ticket.ticket_number}
                className="bg-base-100 shadow-sm shadow-gray-300 rounded-xl p-4 space-y-3"
              >
                <div className="flex justify-between">
                  <p className="text-lg">{ticket.title}</p>
                  <a
                    className={`btn btn-sm rounded-full text-lg ${ticket.status === "Open" ? "bg-[#B9F8CF] text-[#02A53B]" : "bg-[#F8F3B9] text-[#FEBB0C]"}`}
                  >
                    <GoDotFill size={30} className="-m-2" />
                    {ticket.status}
                  </a>
                </div>
                <p className="line-clamp-2">{ticket.description}</p>
                <div className="flex justify-between">
                  <div className="flex gap-4">
                    <p>{ticket.ticket_number}</p>
                    <p
                      className={`uppercase ${ticket.priority === "HIGH PRIORITY" ? "text-[#F83044]" : ticket.priority === "MEDIUM PRIORITY" ? "text-[#FEBB0C]" : "text-[#02A53B]"}`}
                    >
                      {ticket.priority}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <p>{ticket.customer}</p>
                    <p className="flex justify-center items-center gap-1">
                      <SlCalender />
                      {ticket.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ----task status manage---- */}
        <div className="col-span-1">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold mt-10">Task Status</h1>
            <div className="space-y-4">
              {tasks.length > 0 ? (
                tasks.map((task) => (
                  <div
                    key={task.ticket_number}
                    className="bg-base-100 shadow-sm shadow-gray-300 rounded-xl p-4 space-y-2"
                  >
                    <h1 className="text-lg font-semibold">{task.title}</h1>
                    <button
                      onClick={() => handleResolvedTask(task)}
                      className="btn w-full bg-green-500 text-white rounded-sm"
                    >
                      Complete
                    </button>
                  </div>
                ))
              ) : (
                <div className="px-1">
                  <h1>Select a ticket to add to Task Status</h1>
                </div>
              )}
            </div>
          </div>
          <div className="">
            <h1 className="text-3xl font-semibold mt-10">Resolved Task</h1>
            <div className="col-span-1 mt-3 space-y-3">
              {
                resolvedTask.length > 0 ? resolvedTask.map((task) => (
                <div className="bg-[#E0E7FF] p-4 rounded-md text-lg font-semibold overflow-auto shadow-md">
                  <p>{task.title}</p>
                </div>
              )) : <p>No resolved tasks yet.</p>
              }
             
            </div>
          </div>
        </div>
      </section>
      <ToastContainer/>
    </>
  );
}

export default App;
