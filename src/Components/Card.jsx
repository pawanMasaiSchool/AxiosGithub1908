export default function Card({ name, userId, img }) {
  return (
    <div
      style={{
        padding: "5px",
        display: "flex",
        border: "2px solid black",
        gap: "10px",
        width: "500px",
        height: "auto"
      }}
    >
      <div style={{ display: "flex" }}>NAME: - {name}</div>
      <br />
      <div style={{ display: "flex" }}>ID: {userId}</div>
      <br />
      <br />
      <div style={{ display: "flex" }}>
        PROFILE PIC
        <img style={{ width: "100px", height: "100px" }} src={img} alt={name} />
      </div>
    </div>
  );
}
