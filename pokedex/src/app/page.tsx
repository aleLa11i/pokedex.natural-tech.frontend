'use client'
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Typography,
  Button
} from "@mui/material";


const data = [
  {
      "id": 1,
      "name": "bulbasaur",
      "stats": [
          "hp",
          "attack",
          "defense",
          "special-attack",
          "special-defense",
          "speed"
      ],
      "types": [
          "grass",
          "poison"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  },
  {
      "id": 2,
      "name": "ivysaur",
      "stats": [
          "hp",
          "attack",
          "defense",
          "special-attack",
          "special-defense",
          "speed"
      ],
      "types": [
          "grass",
          "poison"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
  },
  {
      "id": 3,
      "name": "venusaur",
      "stats": [
          "hp",
          "attack",
          "defense",
          "special-attack",
          "special-defense",
          "speed"
      ],
      "types": [
          "grass",
          "poison"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
  },
  {
      "id": 4,
      "name": "charmander",
      "stats": [
          "hp",
          "attack",
          "defense",
          "special-attack",
          "special-defense",
          "speed"
      ],
      "types": [
          "fire"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
  },
  {
      "id": 5,
      "name": "charmeleon",
      "stats": [
          "hp",
          "attack",
          "defense",
          "special-attack",
          "special-defense",
          "speed"
      ],
      "types": [
          "fire"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"
  },
  {
      "id": 6,
      "name": "charizard",
      "stats": [
          "hp",
          "attack",
          "defense",
          "special-attack",
          "special-defense",
          "speed"
      ],
      "types": [
          "fire",
          "flying"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
  },
  {
      "id": 7,
      "name": "squirtle",
      "stats": [
          "hp",
          "attack",
          "defense",
          "special-attack",
          "special-defense",
          "speed"
      ],
      "types": [
          "water"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
  },
  {
      "id": 8,
      "name": "wartortle",
      "stats": [
          "hp",
          "attack",
          "defense",
          "special-attack",
          "special-defense",
          "speed"
      ],
      "types": [
          "water"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png"
  },
  {
      "id": 9,
      "name": "blastoise",
      "stats": [
          "hp",
          "attack",
          "defense",
          "special-attack",
          "special-defense",
          "speed"
      ],
      "types": [
          "water"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
  },
  {
      "id": 10,
      "name": "caterpie",
      "stats": [
          "hp",
          "attack",
          "defense",
          "special-attack",
          "special-defense",
          "speed"
      ],
      "types": [
          "bug"
      ],
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png"
  }
];

export default function Home() {
  return (
    <main>
      <Container maxWidth="lg">
        <AppBar position="static">
          
        </AppBar>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {data.map((pokemon) => (
              <Grid key={pokemon.id} item xs={4}>
                <Card sx={{ maxWidth: 345, padding:3 }}>
                  <div
                    style={{
                      display:"flex",
                      alignItems:"center",
                      justifyContent:"center"
                    }}
                  >
                    <CardMedia
                      sx={{ height: 200, width: 200 }}
                      image={pokemon.image}
                      title="green iguana"
                    />
                  </div>
                  <CardContent>
                    <Typography gutterBottom sx={{ fontSize: 20 }} component="div">
                      {pokemon.name.toLocaleUpperCase()}
                    </Typography>
                    <Typography gutterBottom sx={{ fontSize: 14 }} component="div">
                      Stats: {pokemon.stats.join(', ')}
                    </Typography>
                    <Typography gutterBottom sx={{ fontSize: 14 }} component="div">
                      Types: {pokemon.types.join(', ')}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link href="pokemon">
                      <Button variant="contained" >
                        Learn more
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </main>
  );
}
