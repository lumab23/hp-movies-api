import fastify from "fastify";
import cors from "@fastify/cors";
import { ROUTES } from "./routes/moviesRoute";
import { getMovies, getMovieById } from "./controllers/moviesController";

const server = fastify({ logger: true });
const port = process.env.PORT || 3000;

// cors 
server.register(cors, {
    origin: "*"
})

// registrar as rotas
server.get(ROUTES.MOVIES, getMovies);
server.get(ROUTES.MOVIE_BY_ID, getMovieById);

// começar o servidor
server.listen({ port: Number(port) }, () => {
    console.log("server iniciado");
})