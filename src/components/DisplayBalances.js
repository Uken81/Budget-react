import { Grid, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

const DisplayBalances = () => {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <DisplayBalance
            title="Income:"
            value="1,045.50"
            color="green"
            size="tiny"
          />
          <DisplayBalance
            title="Expenses:"
            value="623.50"
            color="red"
            size="tiny"
          />
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default DisplayBalances;
