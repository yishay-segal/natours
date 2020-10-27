const { Router } = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');
const bookingController = require('../controllers/bookingController');

const router = Router();

router.get(
  '/',
  bookingController.createBookingCheckout,
  authController.isLoogedIn,
  viewsController.getOverview
);
router.get('/tour/:slug', authController.isLoogedIn, viewsController.getTour);
router.get('/login', authController.isLoogedIn, viewsController.getLogInForm);
router.get('/me', authController.protect, viewsController.getAccount);
router.get('/my-tours', authController.protect, viewsController.getMyTours);

router.post(
  '/submit-user-data',
  authController.protect,
  viewsController.updateUserData
);

module.exports = router;
