/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51HgUSjDUbMkJXOWjKe7ciFY0mibaOkLtcEO7S1M9wd0aw7ZDSxLgMaZOFqFXihi9c6zyQPdJk0pNo4O3V3KtNHba00QXiP4S5X'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
