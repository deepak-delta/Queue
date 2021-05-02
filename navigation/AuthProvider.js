import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState(false);
  const [server, setServer] = useState(false);
  const [code, setCode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status2, setStatus2] = useState(false);
  const [server2, setServer2] = useState(false);
  const [code2, setCode2] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        server,
        server2,
        setServer2,
        status,
        status2,
        setStatus2,
        code,
        code2,
        setCode2,
        loading,
        login: async (email, password) => {
          setLoading(true);
          setStatus(false);
          setServer(false);
          setCode(false);
          try {
            await auth().signInWithEmailAndPassword(email, password);
            setLoading(false);
          } catch (e) {
            console.log(e.code);
            if (e.code == 'auth/wrong-password') setStatus(true);
            if (e.code == 'auth/unknown') setServer(true);
            if (e.code == 'auth/too-many-requests') setCode(true);

            setLoading(false);
          }
        },
        register: async (firstname, email, password) => {
          setLoading(true);
          try {
            await auth().createUserWithEmailAndPassword(email, password);
            firestore().collection('Users').doc(auth().currentUser.uid).set({
              firstname: firstname,
              email: email,
            });
            setLoading(false);
          } catch (e) {
            console.log(e.code);
            if (e.code == 'auth/email-already-in-use') setStatus2(true);
            if (e.code == 'auth/unknown') setServer2(true);
            if (e.code == 'auth/too-many-requests') setCode2(true);

            setLoading(false);
          }
        },
        logout: async () => {
          setLoading(true);
          try {
            await auth().signOut();
            setLoading(false);
          } catch (e) {
            console.log(e);
            setLoading(false);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
