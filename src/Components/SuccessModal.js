import React from "react";
import { Modal, Result } from "antd";
import { AppContext } from "../Context/AppProvider";

export default function SuccessModal() {
  const { openSuccessModal, setOpenSuccessModal } =
    React.useContext(AppContext);
  return (
    <Modal
      open={openSuccessModal}
      onCancel={() => {
        setOpenSuccessModal(false);
      }}
      footer={null}
    >
      <Result
        status="success"
        title="Assessment sent!"
        subTitle="Your Radar Chart is ready!"
      />
      <a href={"/chart"} target='blank' style={{
        alignContent: "center"
      }} type="primary"> View your Radar Chart </a>
    </Modal>
  );
}
