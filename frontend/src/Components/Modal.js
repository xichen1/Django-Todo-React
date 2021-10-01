import {useState} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label,
  } from "reactstrap";

const ModalComp = ({item, toggle, onSave}) => {
    const [activeItem, setActiveItem] = useState(item);
    const handleChange = (e) => {
        let { name, value } = e.target;
    
        if (e.target.type === "checkbox") {
          value = e.target.checked;
        }
    
        const newActiveItem = { ...activeItem, [name]: value };
    
        setActiveItem(newActiveItem);
    };

    return (
        <Modal isOpen={true} toggle={toggle}>
            <ModalHeader toggle={toggle}>Todo Item</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="todo-title">Title</Label>
                        <Input
                            type="text"
                            id="todo-title"
                            name="title"
                            value={activeItem.title}
                            onChange={handleChange}
                            placeholder="Enter Todo Title"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="todo-description">Description</Label>
                        <Input
                            type="text"
                            id="todo-title"
                            name="description"
                            value={activeItem.description}
                            onChange={handleChange}
                            placeholder="Enter Todo Description"
                        />
                    </FormGroup>
                    <FormGroup check>
                        <Label check></Label>
                        <Input
                            type="checkbox"
                            name="completed"
                            checked={activeItem.completed}
                            onChange={handleChange}
                        />
                        Completed
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button
                    color="success"
                    onClick={() => onSave(activeItem)}>
                    Save
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default ModalComp;