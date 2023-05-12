import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./components/ButtonSaveOrCancel";

const NewEntryForm = () => {
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          icon="tags"
          placeholder="new shiny thing"
          width={12}
          label="Description"
        />
        <Form.Input
          width={4}
          label="Value"
          placeholder="$100.00"
          icon="dollar"
          iconPosition="left"
        />
      </Form.Group>
      <ButtonSaveOrCancel />
    </Form>
  );
};

export default NewEntryForm;
