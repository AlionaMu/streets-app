import './App.css';
import Album from './components/Album';
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';
import { HeaderProps } from './types';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { firebaseConfig } from "./firebaseConfig";
// Initialize Firebase

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

async function getCities() {
  const citiesCol = collection(db, 'streets');
  const citySnapshot = await getDocs(citiesCol);
  console.log('citySnapShot', citySnapshot)
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

// function getAllQuestions() {
//   const res = collection(db, 'cities').
//   return res
// }
// console.log(getAllQuestions())
console.log(getCities())

const headerProps: HeaderProps = {
  sections: {
    title: 'title',
    url: 'url',
  },
    title: 'title2'
}

function App() {
  return (
    <div className="App">
      <Header props={headerProps}></Header>
      <List></List>
     <Album></Album>
     <Footer description='desc' title='title'></Footer>
    </div>
  );
}

export default App;
