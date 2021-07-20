import { Router } from 'express';
import env from '../config/env'

export default (routes: Router): void => {
  routes.get('/env', (req, res) => { res.status(200).json(env) })
}
