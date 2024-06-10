import { UserButton } from "@clerk/nextjs";

function Dashboard({ children }) {
  return (
    <>
      <div>Dashboard</div>
      <UserButton />
    </>
  );
}

export default Dashboard;
