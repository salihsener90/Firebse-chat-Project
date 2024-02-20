

import { auth } from "../Firebase/config";


const Message = ({data}) => {
  //mesajı atan kişinin id'si
//otruumu acan kşibinin id sine eşitse
if(auth.currentUser.uid=== data.author.uid ){
  return <div className="msg-user">{data.text}</div>;
}
//mesajı baska kullanıcı attıysa
  return <div className="msg-other">
  <p className="user-info">
    <img src={data.author.photo} />
    <span>{data.author.name} : </span>
  </p>
  <p className="msg-text">{data.tex}</p>
  </div>;
};

export default Message;
