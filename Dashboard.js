import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Welcome, {user?.username}!</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;