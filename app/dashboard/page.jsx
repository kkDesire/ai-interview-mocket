import { UserButton } from "@clerk/nextjs";
import React from "react";

function Dashboard({ children }) {
  return (
    <>
      <div>Dashboard</div>
      <UserButton />
    </>
  );
}

export default Dashboard;
