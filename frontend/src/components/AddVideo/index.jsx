import React, { useContext } from "react";
import { FormModalContext } from "../../context/FormModalContext";
import { EditingVideoContext } from "../../context/EditingVideoContext";

//MODULO DE FUNÇÃO IMPORTAÇÃO DA ESTILIZAÇÃO DO "AddVideoButton" E DO "AddIcon"

import { AddVideoButton, AddIcon } from "./styles";

//MODULO DE FUNÇÃO EXPORTAÇÃO DA FUNÇÃO ADICIONAR VIDEO

export default function AddVideo() {
  const { openFormModal, setTitle, setLink } = useContext(FormModalContext);
  const { setEditingVideo } = useContext(EditingVideoContext);

  //MODULO DE FUNÇÃO PARA ADICIONAR TITULO E LINK DO VÍDEO

  function handleAdd() {
    setTitle("");
    setLink("");
    setEditingVideo(false);
    openFormModal();
  }


  //MODULO DE FUNÇÃO EVENTO DE CLICK PARA ADICIONAR O VÍDEO
  
  return (
    <li>
      <AddVideoButton onClick={handleAdd}>
        <AddIcon />
      </AddVideoButton>
    </li>
  );
}
