import React from "react";

import Header from "../Header";
import VideoList from "../VideoList";
import Footer from "../Footer";

import { Container } from "./styles";

//function module export environment variables to screen layout

export default function Layout() {
  return (
    <Container>
      <Header />
      <VideoList />
      <Footer />
    </Container>
  );
}
