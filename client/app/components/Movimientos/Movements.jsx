import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react"
import MovTable from "./MovTable"

export default function ModalMov({ isOpen, onClose }) {
  return (
    <>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside"
        size="5xl"
        style={{
          maxWidth: '78%',
          height: '70vh'
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <MovTable />
              </ModalBody>
              <ModalFooter>
                <button className="text-white bg-gray-600 hover:bg-gray-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={onClose}>
                  Cerrar
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}