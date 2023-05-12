import { Grid, Statistic } from "semantic-ui-react";

const DisplayBalance = ({ title, value, color, size }) => {
  return (
    <Grid.Column>
      <Statistic size={size} color={color}>
        <Statistic.Label style={{ textAlign: "left" }}>{title}</Statistic.Label>
        <Statistic.Value>{value}</Statistic.Value>
      </Statistic>
    </Grid.Column>
  );
};

export default DisplayBalance;
