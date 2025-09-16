import { Modal } from 'antd'
import React from 'react'
import Time from "@/assets/images/time.png";
const AlertModal = ({isModalOpen,handleOk}) => {
  return (
  <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleOk}
          footer={[
            <button onClick={handleOk} className="bg-secondaryColor text-white px-4 py-2 rounded-full">
              Got it
            </button>,
          ]}
          centered
        >
          <div className="flex flex-col items-center text-center gap-4">
            <img
              src={ Time}
              alt="Success"
              className="w-20 h-20"
            />
            <h2 className="text-xl font-semibold">Application Submitted!</h2>
            <p className="text-gray-600">
              Your profile has been submitted successfully. An admin will review
              your application.
            </p>
            <p className="text-gray-600">
              You'll be notified once your account is approved.
            </p>
          </div>
        </Modal>
  )
}

export default AlertModal