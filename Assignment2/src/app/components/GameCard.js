import { Card, Badge } from "react-bootstrap";

export default function GameCard({ game }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-start mb-3">
          {game.title}
          {game.editors_choice === "Y" && (
            <Badge bg="warning" text="dark" className="ms-2">
              ★ Editor's Choice
            </Badge>
          )}
        </Card.Title>
        <div className="mb-2">
          <strong>Platform: </strong>
          <Badge bg="primary" className="ms-1">
            {game.platform}
          </Badge>
        </div>
        <div className="mb-2">
          <strong>Score: </strong>
          <Badge
            bg={
              game.score >= 8
                ? "success"
                : game.score >= 6
                ? "warning"
                : "danger"
            }
            className="ms-1"
          >
            {game.score}/10
          </Badge>
        </div>
        <div>
          <strong>Genre: </strong>
          <Badge bg="secondary" className="ms-1">
            {game.genre}
          </Badge>
        </div>
      </Card.Body>
    </Card>
  );
}
