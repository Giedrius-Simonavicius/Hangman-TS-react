export function HangmanDrawing() {
  return (
    <div style={{ position: "relative" }}>
      {HEAD}
      <div style={{ height: "50px", width: "10px", background: "black", top: 0, right: 0, position: "absolute" }}></div>
      <div style={{ height: "10px", width: "200px", background: "black", marginLeft: "120px" }}></div>
      <div style={{ height: "400px", width: "10px", background: "black", marginLeft: "120px" }}></div>
      <div style={{ height: "10px", width: "250px", background: "black" }}></div>
    </div>
  );
}
