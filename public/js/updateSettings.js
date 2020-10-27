/* eslint-disable */
// updateData
import axios from 'axios';
import { showAlert } from './alerts';

// type is either 'password' of 'data'
export const updateSettings = async (data, type) => {
  try {
    const url = type === 'password' ? 'updateMyPassword' : 'updateMe';

    const res = await axios({
      method: 'PATCH',
      url: `/api/v1/users/${url}`,
      data,
    });

    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} updated successfully!`);
    }
  } catch (error) {
    // alert(`${error.response.data.message}`);
    // console.log(error.response.data.message);
    console.log(error);
    showAlert('error', error.response.data.message);
  }
};
