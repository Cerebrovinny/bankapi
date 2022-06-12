import { Router } from "express";

const router = Router();

router.post('/event', (req, res) => {
    return res.status(201).send();
});

export { router };