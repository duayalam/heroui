"use client";
import {
  Button,
  Input,
  Alert,
  Modal,
  ModalTitle,
  ModalFooter,
  Progress,
  Select,
} from "@/components/index";
import { useState } from "react";
export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  //SELECT
  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
    { value: "date", label: "Date" },
    { value: "elderberry", label: "Elderberry" },
  ];

  return (
    <div className="p-5">
      <br />
      <b>Alertas</b>
      <br />

      <Alert type={"dark"} isOpen={true} showCloseButton={true}>
        Prueba
      </Alert>
      <Alert type={"red"} isOpen={true} showCloseButton={true}>
        Prueba
      </Alert>
      <Alert type={"blue"} isOpen={true} showCloseButton={false}>
        Prueba
      </Alert>

      <br />
      <b>Botones</b>
      <br />
      <Button color="white" size={"sm"}>
        Botón
      </Button>
      <Button color="blue" size={"md"}>
        Botón
      </Button>
      <Button color="white" size={"lg"}>
        Botón
      </Button>

      <br />
      <b>Input</b>
      <br />
      <Input color={"blue"} placeholder="Input" />
      <Input color={"red"} placeholder="Input" />
      <Input color={"dark"} placeholder="Input" label="Nombre" />
      <Input color={"green"} placeholder="Input" label="Nombre" />

      <br />
      <b>Modales</b>
      <br />
      <Button color="blue" onClick={() => openModal()}>
        Abrir Modal
      </Button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalTitle>Título del modal</ModalTitle>
        Contenido del modal
        <ModalFooter>
          <Button className={"dark:bg-gray-900"} onClick={() => closeModal()}>
            Cancelar
          </Button>
          <Button color={"blue"}>Aceptar</Button>
        </ModalFooter>
      </Modal>

      <br />
      <b>Progress</b>
      <br />
      <Progress value={30} color={"dark"} label="Completed" />
      <br />
      <b>Select</b>
      <br />
      <Select options={options} searchable={true} size={'sm'} placeholder="Buscar fruta" />
    </div>
  );
}
