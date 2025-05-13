import React from "react";
import { Navigate, useNavigate } from "react-router";
import { useAuthStore } from "../stores/authStore";
export default function Root() {
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();
  if (!user) {
    navigate("/login");
  }
  return <div></div>;
}
