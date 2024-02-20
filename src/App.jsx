import { useState } from "react";
import AuthPage from "./pages/AuthPage";
import RoomPage from "./pages/RoomPage";
import Chat from "./pages/Chat";

function App() {
  //kullancının yetkisi var mı onun state ini tutuyoruz sonra
  //state in ilk degerinin localstorage dan alıyoruz
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));
  const [room, setRoom] = useState(null);

  //kullanııcnın ootrumu sonladnırma

  // yetkisi yaksa > giriş
  if (!isAuth) {
    return <AuthPage setIsAuth={setIsAuth} />;
  }
  //yetkisi varsa
  return (
    <div className="container">
      {room ? 
      //oda belirlendisye sıhbet ekranına yönlendime
      <Chat room={room} setRoom={setRoom}/> 
      :
       <RoomPage setIsAuth={setIsAuth} setRoom={setRoom} />}
    </div>
  );
}
export default App;
