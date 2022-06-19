import React, { useContext } from "react";
import { FormModalContext } from "../../context/FormModalContext";
import { EditingVideoContext } from "../../context/EditingVideoContext";

//"AddVideoButton" and "AddIcon" styling import function module

import { AddVideoButton, AddIcon } from "./styles";

//export function module add video function

export default function AddVideo() {
  const { openFormModal, setTitle, setLink } = useContext(FormModalContext);
  const { setEditingVideo } = useContext(EditingVideoContext);

//Function module to add video title and link

  function handleAdd() {
    setTitle("");
    setLink("");
    setEditingVideo(false);
    openFormModal();
  }


//click event function module to add video

  return (
    <li>
      <AddVideoButton onClick={handleAdd}>
        <AddIcon />
      </AddVideoButton>
    </li>
  );
}
