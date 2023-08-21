import { Button, Modal } from "semantic-ui-react";

export function OrderModal(props: any) {

    const { children, title, onClose } = props

    return (
        <Modal
            open={props.show}
            onClose={props.onClose}
        >
            <Modal.Header>{title}</Modal.Header>
            <Modal.Content className="flex">
                {children}
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={onClose}>
                    Cerrar
                </Button>

            </Modal.Actions>
        </Modal>
    )
}
