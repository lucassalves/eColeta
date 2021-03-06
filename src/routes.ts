import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create );
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

// opções de padrões: index (exibir vários itens), show (exibir um único item), create, update, delete

export default routes;