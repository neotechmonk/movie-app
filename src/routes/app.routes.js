import { Router } from "express";
const router = Router();
import { catchErrors } from "../errorHandlers/errorHandlers";

import bodyParser from "body-parser";
import path from "path";

//Global App Routes
// router.get("/", function(req, res) {
//   let clientEntryPoint = path.join(__dirname + "../../public/app.html");
//   // let clientEntryPoint = path.join(__dirname + "/public/app.html");
//   console.log(`in index. About to route to ${clientEntryPoint}`);
//   res.sendFile(clientEntryPoint);

//   //res.sendFile(path.join(__dirname+'/../public/app.html'));
// });

//API related routes
import {
  getAllMovies,
  getMoviesWithActiveSessions,
  createMovieByName
} from "../controllers/movie.controller";

//Routes for CRUD functions of movie endpoint
// router.put("/api/v1/movies/:id/update", movieController.movie_update);

// router.get("/api/v1/movies/:id", movieController.movie_details);

//get all movies. optional queries limit=2&skip=0
router.get(["/api/v1/movies/getAll"], catchErrors(getAllMovies)); //deprecate root level API serves
//get all movies with active show sessions. optional queries limit=2&skip=0
router.get(
  ["/movies/", "/movie", "/api/v1/movies/getSessions/"],
  catchErrors(getMoviesWithActiveSessions)
); //deprecate root level API serves

router.post("/api/v1/movies/create", createMovieByName);
// router.post("/api/v1/movies/createbulk", movieController.movie_createbulk);

// router.delete("/api/v1/movies/:id/delete", movieController.movie_delete);

export default router;