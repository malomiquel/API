import musics from "../controllers/controller.js";
import express from "express";

const router = express.Router();

const routing = (app) => {
  /**
   * @swagger
   * /musics:
   *   post:
   *     summary: Create a new music.
   *     tags:
   *     - "music"
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *                      title:
   *                         type: string
   *                         description: Title's music
   *                         example: Titanium
   *                      artist:
   *                         type: string
   *                         description: Artist's music
   *                         example: David Guetta
   *                      year:
   *                         type: integer
   *                         description: Year's music
   *                         example: 2011
   *     responses:
   *       201:
   *         description: Create
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 data:
   *                   type: object
   *                   properties:
   *                      id:
   *                        type: integer
   *                        description: The music ID.
   *                        example: 1
   *                      title:
   *                         type: string
   *                         description: Title's music
   *                         example: Titanium
   *                      artist:
   *                         type: string
   *                         description: Artist's music
   *                         example: David Guetta
   *                      year:
   *                         type: integer
   *                         description: Year's music
   *                         example: 2011
   */
  router.post("/", musics.createOne);

  /**
   * @swagger
   * /musics:
   *   get:
   *     summary: Return music's list.
   *     tags:
   *     - "music"
   *     responses:
   *       200:
   *         description: Music's list
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 data:
   *                   type: array
   *                   items:
   *                     type: object
   *                     properties:
   *                       id:
   *                         type: integer
   *                         description: Unique identifier for a music
   *                         example: 1
   *                       title:
   *                         type: string
   *                         description: Title's music
   *                         example: Titanium
   *                      artist:
   *                         type: string
   *                         description: Artist's music
   *                         example: David Guetta
   *                      year:
   *                         type: integer
   *                         description: Year's music
   *                         example: 2011
   */
  router.get("/", musics.findAll);

  /**
   * @swagger
   * /musics/{id}:
   *   get:
   *     summary: Return a music by is ID.
   *     tags:
   *     - "music"
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: Numeric ID of the music to retrieve.
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: A music.
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 data:
   *                   type: object
   *                   properties:
   *                      id:
   *                         type: integer
   *                         description: Unique identifier for a music
   *                         example: 1
   *                       title:
   *                         type: string
   *                         description: Title's music
   *                         example: Titanium
   *                      artist:
   *                         type: string
   *                         description: Artist's music
   *                         example: David Guetta
   *                      year:
   *                         type: integer
   *                         description: Year's music
   *                         example: 2011
   */
  router.get("/:id", musics.findOne);

  /**
   * @swagger
   * /musics/{id}:
   *   put:
   *     summary: Modify a music by is ID.
   *     description: Retrieve a single JSONPlaceholder user. Can be used to populate a user profile when prototyping or testing an API.
   *     tags:
   *     - "music"
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: Numeric ID of the music to retrieve.
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Modify a music by is ID.
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 data:
   *                   type: object
   *                   properties:
   *                      id:
   *                         type: integer
   *                         description: Unique identifier for a music
   *                         example: 1
   *                       title:
   *                         type: string
   *                         description: Title's music
   *                         example: Titanium
   *                      artist:
   *                         type: string
   *                         description: Artist's music
   *                         example: David Guetta
   *                      year:
   *                         type: integer
   *                         description: Year's music
   *                         example: 2011
   */

  router.put("/:id", musics.updateOne);

  /**
   * @swagger
   * /musics/{id}:
   *   delete:
   *     summary: Delete a music by is ID.
   *     description: Retrieve a single JSONPlaceholder user. Can be used to populate a user profile when prototyping or testing an API.
   *     tags:
   *     - "music"
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: Id d'une musique
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Delete a music.
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 data:
   *                   type: object
   *                   properties:
   *                      id:
   *                         type: integer
   *                         description: Unique identifier for a music
   *                         example: 1
   *                       title:
   *                         type: string
   *                         description: Title's music
   *                         example: Titanium
   *                      artist:
   *                         type: string
   *                         description: Artist's music
   *                         example: David Guetta
   *                      year:
   *                         type: integer
   *                         description: Year's music
   *                         example: 2011
   */

  router.delete("/:id", musics.deleteOne);
  app.use("/musics", router);
};

export default routing;
