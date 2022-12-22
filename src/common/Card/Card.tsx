import { Card, CardProps, styled, Typography } from "@mui/material";
import "./Card.css";

interface cardPropsModel {
  title: string;
  className?: string;
}

const Cardstyle = styled(Card)<CardProps>(({ theme }) => ({
  card: {
    backgroundColor: "#1E1E1E",
    color: "#FFFFFF",
    width: "50vh",
    height: "70vh",
  },
}));

const CardWithoutContent: React.FC<cardPropsModel> = ({
  title,
}: cardPropsModel) => {
  return (
    <Card
      style={{
        backgroundColor: "#1E1E1E",
        color: "#FFFFFF",
        width: "50vh",
        height: "70vh",
        padding: "50px 20px 80px 20px",
      }}
    >
      <Typography variant="caption" gutterBottom>
        {title}
      </Typography>
    </Card>
  );
};

export default CardWithoutContent;
