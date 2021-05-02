import {useContext, useState} from 'react';
import cache from '../utils/cache';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../navigation/AuthProvider';

export default fetchData = () => {
  const [userDetails, setUserDetails] = useState({});
  const {user} = useContext(AuthContext);

  const save = async dbdata => {
    if (dbdata.firstname) {
      setUserDetails({timestamp: Date.now(), value: dbdata});
      await cache.store(user.uid + 'Data', dbdata);
    } else {
      console.log('no data found');
    }
  };

  const load = async () => {
    const userCache = await cache.get(user.uid + 'Data');
    if (userCache != null && userCache.value) {
      setUserDetails(userCache);
    } else {
      firestore()
        .collection('Users')
        .doc(user.uid)
        .onSnapshot(documentSnapshot => {
          save(documentSnapshot.data());
        });
    }
  };
  return {userDetails, load};
};
