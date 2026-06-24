import { Marker, Popup } from "react-leaflet";

function FirebaseUsers({ users }) {
  return (
    <>
      {users.map((user) => (
        <Marker
          key={user.id}
          position={[user.lat, user.lng]}
        >
          <Popup>
            <div>
              <strong>{user.id}</strong>
              <br />
              Accuracy: {Math.round(user.accuracy)} m
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
}

export default FirebaseUsers;