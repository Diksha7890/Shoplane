import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectiveRoute = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      navigate("/LoginPage");
    }
  }, []);
  return (
    <>
      <Component />
    </>
  );
};
export default ProtectiveRoute;
