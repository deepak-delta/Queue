import React,{useState, useEffect} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const ScanPage = ({navigation}) => {

    const [userId, setuserId] = useState(auth().currentUser.uid);
    const [code, setCode] = useState(null);

    useEffect(() => {
        if(code){
            fetchData();
        }
    },[code]);

    const fetchData = () => {
        firestore()
            .collection('Queues')
            .doc(code)
            .get()
            .then((doc) => {
            if (doc.exists) {
                const newTokenNumber = doc.data().TotalT + 1;
                firestore()
                    .collection('Queues')
                    .doc(code)
                    .set({
                        Tokens: {[newTokenNumber]: userId},
                        TotalT: newTokenNumber
                    }, { merge: true })
                    .then(() => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
        
    };

         
    const onSuccess = (e) => {
        const d = e.data;
        setCode(d);
        navigation.navigate("Home",);
    }

   

    return(
        <QRCodeScanner
        onRead={onSuccess}
    /> 
    )
}
export default ScanPage;
