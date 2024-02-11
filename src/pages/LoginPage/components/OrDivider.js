//OrDivider
//Styled component ile de oluşturulabilir TODO

const OrDivider = () => {
  return (
    <div style={{ display: "flex" }}>
      <hr
        style={{
          flex: 1,
          marginRight: "10px",
        }}
      />
      <span>Veya</span>
      <hr
        style={{
          flex: 1,
          marginLeft: "10px",
        }}
      />
    </div>
  );
};

export default OrDivider;
