import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Hassle Free Travel !!!</h1>
      <span className="mailDesc">
        Register Here and we'll send the best deals to you
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Be a Part of Family</button>
      </div>
    </div>
  );
};

export default MailList;
