import React from "react";

import Header from "../Header";
import VideoList from "../VideoList";
import Footer from "../Footer";

import { Container } from "./styles";

//MODULO DE FUNÇÃO: EXPORTAÇÃO DAS VARIAVEIS DE AMBIENTE PARA O LAYOUT DE TELA


export default function Layout() {
  return (
    <Container>
      <Header />
      <VideoList />
      <Footer />
    </Container>
  );
}
