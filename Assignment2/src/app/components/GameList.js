import { Row, Col } from "react-bootstrap";
import GameCard from "./GameCard";

export default function GameList({ games }) {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {games.map((game, index) => (
        <Col key={index}>
          <GameCard game={game} />
        </Col>
      ))}
    </Row>
  );
}
