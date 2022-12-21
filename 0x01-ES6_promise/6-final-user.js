import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const user = {
    status: 'pending',
    value: '',
  };
  const photo = {
    status: 'pending',
    value: '',
  };

  try {
    user.status = 'fulfilled';
    user.value = await signUpUser(firstName, lastName);
  } catch (err) {
    user.status = 'rejected';
    user.value = err.toString();
  }
  try {
    photo.status = 'fulfilled';
    photo.value = await uploadPhoto(fileName);
  } catch (err) {
    photo.status = 'rejected';
    photo.value = err.toString();
  }

  return [user, photo];
}
