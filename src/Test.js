import React from "react";
import { Helmet } from "react-helmet";
import COLORS from "./config/colors";

const Test = () => {
  return (
    <>
    <Helmet>
      <title> KUCC - Kathmandu University Computer Club</title>
    </Helmet>
      <h1 style={{ color: COLORS.primary }}>Primary</h1>
      <h1 style={{ color: COLORS.secondary }}>Secondary</h1>
      <h1 style={{ color: COLORS.medium }}>Medium</h1>
      <h1 style={{ color: COLORS.light }}>Light</h1>
      <h1 style={{ color: COLORS.danger }}>Danger</h1>
      <h1 style={{ color: COLORS.dark }}>Dark</h1>
    </>
  );
};

export default Test;
