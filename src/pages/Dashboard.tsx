import { useAuthStore } from "../stores/authStore";
import axiosInstance from "../api/axios";
import { CreateUser } from "../helpers/User";
import { jwtDecode } from "jwt-decode";
import { DotNetJwtPayload, User } from "../helpers/User.d";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();
  if (!(user && user.roles.includes("Admin") && user.exp * 1000 > Date.now())) {
    axiosInstance
      .get("/auth/refresh")
      .then((res) => {
        const { token } = res.data;
        const decodedToken = jwtDecode<DotNetJwtPayload>(token);
        const newUser: User = CreateUser(decodedToken);
        setUser(newUser);
      })
      .catch((err) => {
        console.error(err);
        setUser(null); // Clear user if refresh fails
        navigate("/login"); // Redirect to login page
      });
  }
  return <div>Dashboard</div>;
};

export default Dashboard;
Dashboard;
