import { useEffect } from "react";
import { auth, db } from "../Firebase/config";
import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
  where,
} from "firebase/firestore";
import { useState} from "react";
import Message from "../components/Message";


const Chat = ({ room, setRoom }) => {
  const [messages, setMessages] = useState(null);
  //koleksiyonun referansını alma
  const messagesRef = collection(db, "messages");
  //mesaj gnderme
  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    //veri tabanına yeni document ekler
    await addDoc(messagesRef, {
      text,
      room,
      author: {
        name: auth.currentUser.displayName,
        uid: auth.currentUser.uid,
        photo: auth.currentUser.photoURL,
      },
      createAt: serverTimestamp(), //sunucunun zamanını alır
    });
    //formu temizle
    e.target[0].value = "";
  };

  //koleksiyondaki değişimi canlı olarak izleme
  useEffect(() => {
    //filtrelem ayarları tanımlama
    const options = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt", "asc")
    );

    //koleksıyon her degısgınde
    //bir fonksıyon calıstırıp  fonskıyona
    //dokumnaları parametre olarak gönderiri
    const unsubscribe = onSnapshot(messagesRef, (snapshot) => {
      //mesajları state ten once gecici tuttugumuz dizi
      const tempData = [];

      //documanların vwerilerine erişip yeni diziye gonderiyoruz
      snapshot.docs.forEach((doc) => tempData.push(doc.data()));
      //state i guncelleme
      setMessages(tempData);
    });
    //bileşenden ayrılırsam izleycici iptal edilir
    return () => unsubscribe;
  }, []);
  return (
    <div className="chat">
      <header>
        <p>{auth?.currentUser?.displayName}</p>
        <p>{room}</p>
        <button onClick={() => setRoom(null)}> FarklıOda</button>
      </header>
      <main>
        {messages?.map((data, i) => (
          <Message key={i} data={data} />
        ))}
      </main>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="mesajınızı yazınız.." />
        <button>Gönder</button>
      </form>
    </div>
  );
};

export default Chat;
