
//Imports de bibliotecas usadas na aplicacao
const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

//Imports dos controllers usados
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashBoardController');
const BookingController = require('./controllers/BookingController');
const ApprovalController = require('./controllers/ApprovalController');
const RejectionController = require('./controllers/RejectionController');

//Router
const routes = express.Router();
const upload = multer(uploadConfig);

//Rotas da aplicacao
routes.post('/sessions', SessionController.store);
routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/dashboard', DashboardController.show);
routes.post('/spots/:spot_id/bookings', BookingController.store);
routes.post('/bookings/:booking_id/approvals', ApprovalController.store);
routes.post('/bookings/:booking_id/rejections', RejectionController.store);

//Export de rotas
module.exports = routes;
