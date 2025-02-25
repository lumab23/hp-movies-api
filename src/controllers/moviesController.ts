import { FastifyReply, FastifyRequest } from "fastify";
import { moviesData } from "../data/movies";
import { StatusCode } from "../utils/statusCode";

interface MovieParams {
    id: string
}

export const getMovies = async (req: FastifyRequest, res: FastifyReply) => {
    res.type("application/json").code(StatusCode.OK);
    return { movies: moviesData}
}

export const getMovieById = async (req: FastifyRequest<{ Params: MovieParams }>, res: FastifyReply) => {
    const id = parseInt(req.params.id);
    const movie = moviesData.find((m) => m.id === id);

    if (!movie) {
        res.type("application/json").code(StatusCode.NOT_FOUND);
        return { message: "Not Found."}
    } else {
        res.type("application/json").code(StatusCode.OK);
        return { movie }
    }

}

