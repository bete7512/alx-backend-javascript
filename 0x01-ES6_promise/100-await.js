import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const res = {
    photo: null,
    user: null,
  };
  try {
    res.photo = await uploadPhoto();
    res.user = await createUser();
  } catch (err) {
    res.photo = null;
    res.user = null;
  }
  return res;
}
