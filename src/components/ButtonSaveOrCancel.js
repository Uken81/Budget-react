import { Button } from "semantic-ui-react";

const ButtonSaveOrCancel = () => {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>Cancel</Button>
      <Button.Or />
      <Button primary>OK</Button>
    </Button.Group>
  );
};

export default ButtonSaveOrCancel;
