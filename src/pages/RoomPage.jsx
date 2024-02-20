import React from "react";
import { auth } from "../Firebase/config";
import { signOut } from "firebase/auth";

const RoomPage = ({setIsAuth, setRoom}) => {
  const handleLogout = () => {
    //firebase ile acılan oturumu sınladırma
    signOut(auth).then(() => {
      //lokalden kaldırma
      localStorage.removeItem("token");
      //login sayfasına yonlendrimeyi tetikler
      setIsAuth(false);
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //oda ismini kucuk harfe cevirme
    const roomName = e.target[0].value.toLowerCase();
    setRoom(roomName);
  };

  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h1>Chat Odası</h1>
      <p>Lütfen Oda Adını Giriniz</p>

      <input type="text" placeholder=" " />
      <button type="submit">Odaya Gir</button>
      <button type="button" onClick={handleLogout}>
        Çıkış Yap
      </button>
    </form>
  );
};

export default RoomPage;
