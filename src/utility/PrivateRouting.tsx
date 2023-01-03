import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const PrivateRoutes = (props: any) => {
  const { Component } = props;
  const nevigate = useNavigate();
  useEffect(() => {
    var session_token = localStorage.getItem("token");
    if (!session_token) {
      nevigate("/");
    }
  });

  return (
    <div>
      <Component />
    </div>
  );
};

export default PrivateRoutes;
