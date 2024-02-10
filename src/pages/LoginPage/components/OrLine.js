//Giriş yapma kutusu içerisindeki veya çizgisi
//Styled component ile de oluşturulabilir TODO

const OrLine = () => {
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

export default OrLine;
