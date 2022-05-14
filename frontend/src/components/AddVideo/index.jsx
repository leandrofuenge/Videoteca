import React, { useContext } from "react";
import { FormModalContext } from "../../context/FormModalContext";
import { EditingVideoContext } from "../../context/EditingVideoContext";

//Importação da estilização do AddVideoButton e do AddIcon.
import { AddVideoButton, AddIcon } from "./styles";

//Exportação da função adicionar video
export default function AddVideo() {
  const { openFormModal, setTitle, setLink } = useContext(FormModalContext);
  const { setEditingVideo } = useContext(EditingVideoContext);

  //Função para adicionar Titulo e link do video
  function handleAdd() {
    setTitle("");
    setLink("");
    setEditingVideo(false);
    openFormModal();
  }


  //Evento de Click para Adicionar o Video dando um Click no Botão
  return (
    <li>
      <AddVideoButton onClick={handleAdd}>
        <AddIcon />
      </AddVideoButton>
    </li>
  );
}
