import axios from "axios";

const Login = ({ setToken, setName, setRoom, name, room }) => {
  async function handleSubmit(event) {
    event.preventDefault();
    const result = await axios.post(
      `https://videocall-3386-dev.twil.io/videoToken?identity=${name}`,
      {
        identity: name,
        room,
      }
    );
    setToken(result.data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="room">
        Room
        <input
          type="text"
          id="room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Join the chat</button>
    </form>
  );
};

export default Login;
