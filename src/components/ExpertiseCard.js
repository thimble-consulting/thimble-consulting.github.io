import React, { useState } from "react";
import Modal from "react-modal";
import Card from "../components/Card";
import sanitizeHtml from 'sanitize-html';
import Button from "../components/Button";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";

Modal.setAppElement('#___gatsby');

const ExpertiseCard = ({ title, detail, blurb }) => {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      zIndex: "100",
    }
  };
  const sanitizedBlurb = sanitizeHtml(blurb)
  const sanitizedDetail = sanitizeHtml(detail)
  const [modalIsOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          className="!bg-white !absolute p-5 top-1/2 -translate-y-1/2 w-full left-1/2 -translate-x-1/2 rounded-lg max-h-[80%] overflow-auto w-full sm:w-11/12 md:w-4/5 lg:w-3/5"
        >
          <div className="flex justify-between">
            <h3 className="text-2xl font-bold font-serif mb-6 mt-3">{title}</h3>
            <Button onClick={closeModal} className="text-sm self-start !bg-ghost-white w-10 !p-2 rounded-full">
              <XMarkIcon className="w-full stroke-gray-700 stroke-2"/>
            </Button>
          </div>
          <div className="font-light text-base detail-container" dangerouslySetInnerHTML={{ __html: sanitizedDetail }}></div>
        </Modal>
      </div>

      <Card className="py-6 px-4 lg:pt-8 w-full h-72 bg-gray-50">
        <p className="font-bold font-serif text-xl mb-4">
          { title }
        </p>
        <p className="font-light text-sm" dangerouslySetInnerHTML={{ __html: sanitizedBlurb }}></p>
        <Button className="absolute bottom-5 right-5 text-sm self-end !bg-gray-300 w-10 !p-2 rounded-full mt-4" onClick={openModal}>
          <PlusIcon className="w-full stroke-gray-700 stroke-2"/>
        </Button>
      </Card>
    </>
  )
}

export default ExpertiseCard;
