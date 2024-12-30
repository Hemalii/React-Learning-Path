"use client";
import { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import GameList from "./components/GameList";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("all");

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json"
        );
        const data = await response.json();
        const gamesData = data.slice(1);
        setGames(gamesData);
        setFilteredGames(gamesData);

        const uniquePlatforms = [
          ...new Set(gamesData.map((game) => game.platform)),
        ];
        setPlatforms(uniquePlatforms);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };
    fetchGames();
  }, []);

  useEffect(() => {
    let result = games;
    if (selectedPlatform !== "all") {
      result = result.filter((game) => game.platform === selectedPlatform);
    }
    if (searchTerm) {
      result = result.filter((game) =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredGames(result);
  }, [searchTerm, selectedPlatform, games]);

  return (
    <Container className="py-4">
      <h1 className="mb-4">Games Library</h1>
      <Row className="mb-4">
        <Col md={6} className="mb-3">
          <Form.Control
            type="text"
            placeholder="Search games..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col md={6}>
          <Form.Select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
          >
            <option value="all">All Platforms</option>
            {platforms.map((platform) => (
              <option key={platform} value={platform}>
                {platform}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
      <GameList games={filteredGames} />
    </Container>
  );
}
