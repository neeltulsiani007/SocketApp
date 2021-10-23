import "./JoinRoomModal.css";

const JoinRoomModal = ({ showModal }) => {
  return (
    <>
      {showModal && (
        <div className="joinRoomModal-container">
          <div className="joinRoomModal-card">
            <h1>test</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default JoinRoomModal;
