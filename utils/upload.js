import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import {storage} from "../firebase/firebase"


export default async function Upload(image) {

const storageRef = ref(storage,`image/${new Date().getTime().toString().concat(image?.name)}`);

  const uploadTask = await uploadBytesResumable(storageRef, image)

  const imgUrl = await getDownloadURL(storageRef);
  console.log(imgUrl);

  return imgUrl; 
}