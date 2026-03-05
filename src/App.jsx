import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import { GoDotFill } from "react-icons/go";
import { SlCalender } from "react-icons/sl";


// const tickets = [
//   {
//     ticket_number: "#2001",
//     title: "Password Reset Link Not Working",
//     description:
//       "Customer reports that the password reset email link expires immediately after clicking.",
//     priority: "HIGH PRIORITY",
//     status: "Open",
//     customer: "Alice Carter",
//     date: "2/01/2024",
//   },
//   {
//     ticket_number: "#2002",
//     title: "Subscription Renewal Failed",
//     description:
//       "Customer attempted to renew their subscription but payment was declined despite multiple attempts.",
//     priority: "HIGH PRIORITY",
//     status: "Open",
//     customer: "Brian Lee",
//     date: "2/02/2024",
//   },
//   {
//     ticket_number: "#2003",
//     title: "Error Loading Dashboard",
//     description:
//       "Customer’s dashboard shows a blank screen when logging in via Safari browser.",
//     priority: "MEDIUM PRIORITY",
//     status: "In-Progress",
//     customer: "Chloe Martinez",
//     date: "2/03/2024",
//   },
//   {
//     ticket_number: "#2004",
//     title: "Incorrect Order Quantity",
//     description: "Customer ordered 3 items but only 2 were shipped.",
//     priority: "LOW PRIORITY",
//     status: "Open",
//     customer: "Daniel Kim",
//     date: "2/04/2024",
//   },
//   {
//     ticket_number: "#2005",
//     title: "Mobile Notifications Not Received",
//     description:
//       "Customer is not receiving push notifications on iOS 17 devices.",
//     priority: "MEDIUM PRIORITY",
//     status: "In-Progress",
//     customer: "Ella Thompson",
//     date: "2/05/2024",
//   },
//   {
//     ticket_number: "#2006",
//     title: "Refund Process Delayed",
//     description:
//       "Customer requested a refund 3 weeks ago but hasn’t received confirmation.",
//     priority: "HIGH PRIORITY",
//     status: "Open",
//     customer: "Frank Harris",
//     date: "2/06/2024",
//   },
//   {
//     ticket_number: "#2007",
//     title: "Invoice Shows Wrong Currency",
//     description:
//       "Customer’s invoice is displayed in USD instead of EUR despite account settings.",
//     priority: "LOW PRIORITY",
//     status: "Open",
//     customer: "Grace Walker",
//     date: "2/07/2024",
//   },
//   {
//     ticket_number: "#2008",
//     title: "App Freezes During Checkout",
//     description:
//       "Customer reports the app freezes when attempting to complete checkout.",
//     priority: "HIGH PRIORITY",
//     status: "Open",
//     customer: "Henry Adams",
//     date: "2/08/2024",
//   },
//   {
//     ticket_number: "#2009",
//     title: "Email Verification Not Received",
//     description:
//       "Customer signed up but never received the verification email.",
//     priority: "MEDIUM PRIORITY",
//     status: "In-Progress",
//     customer: "Isabella Moore",
//     date: "2/09/2024",
//   },
//   {
//     ticket_number: "#2010",
//     title: "Profile Picture Upload Fails",
//     description:
//       "Customer cannot upload a profile picture; error message appears every time.",
//     priority: "LOW PRIORITY",
//     status: "Open",
//     customer: "Jack Robinson",
//     date: "2/10/2024",
//   },
//   {
//     ticket_number: "#2011",
//     title: "Delayed Shipping Notification",
//     description:
//       "Customer did not receive any update about delayed shipping for their order.",
//     priority: "MEDIUM PRIORITY",
//     status: "In-Progress",
//     customer: "Karen White",
//     date: "2/11/2024",
//   },
//   {
//     ticket_number: "#2012",
//     title: "Two-Factor Authentication Not Working",
//     description:
//       "Customer reports that the 2FA code is not being accepted during login.",
//     priority: "HIGH PRIORITY",
//     status: "Open",
//     customer: "Liam Scott",
//     date: "2/12/2024",
//   },
// ];

function App() {
  const [tickets, setTickets] = useState([]);
  const [tasks, setTasks] = useState([]);

  const handleTask = (ticketNumber) => {
    console.log(ticketNumber.ticket_number);
    const updateTickets = tickets.map((ticket)=> ticket.ticket_number === ticketNumber.ticket_number ? {...ticket, status: "In-Progress"} : ticket )
    setTickets(updateTickets)
  //   const exist = tasks.find(ticketNumber=>ticketNumber.ticket_number === ticket.ticket_number)
  //   if(exist){
  //     return  alert("duplicate ditected")
  //   }
   
  //   console.log(ticket);
  //   setTasks([...tasks, ticket])
  // console.log(tasks);

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
      <Banner />
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
            {/* <div className="bg-base-100 shadow-sm shadow-gray-300 rounded-xl p-4 space-y-3">
              <div className="flex justify-between">
                <p className="text-lg">Login Issues - Can't Access Account</p>
                <a className="btn btn-sm rounded-full text-lg bg-[#B9F8CF] text-[#02A53B]">
                  <GoDotFill size={30} className="-m-2" />
                  Open
                </a>
              </div>
              <p className="line-clamp-2">
                Customer is unable to log in to their account. They've tried
                resetting their password multiple times but still cannot access
                their account.
              </p>
              <div className="flex justify-between">
                <div className="flex gap-4">
                  <p>#001</p>
                  <p className="uppercase">High Priority</p>
                </div>
                <div className="flex gap-4">
                  <p>Daniel Kim</p>
                  <p className="flex justify-center items-center gap-1">
                    <SlCalender />
                    2/04/2024
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* ----task status manage---- */}
        <div className="col-span-1">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold mt-10">Task Status</h1>
            <div className="space-y-4">
              {
                tasks.length > 0 ?
                  tasks.map((task)=>(
                <div key={task.ticket_number} className="bg-base-100 shadow-sm shadow-gray-300 rounded-xl p-4 space-y-2">
                <h1 className="text-lg font-semibold">{task.title}</h1>
                <button className="btn w-full bg-green-500 text-white rounded-sm">Complete</button>
              </div>
               )) : <div className="px-1">
                <h1>Select a ticket to add to Task Status</h1>
               </div>

              }
             
              
            </div>
            
          </div>
          <div>
            <h1 className="text-3xl font-semibold mt-10">Resolved Task</h1>
            <div className="col-span-1 mt-3"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
