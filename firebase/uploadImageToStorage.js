
import storage from '@react-native-firebase/storage';

const uploadImageToStorage = async (path, imageName) => {
    console.log(path, imageName)
    let reference = storage().ref(imageName);       
    await reference.putFile(path);
    const link = await reference.getDownloadURL()
    
    return link;
}

export default uploadImageToStorage;