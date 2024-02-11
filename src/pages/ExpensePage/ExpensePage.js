import MySideNav from "../../components/SideNav/MySideNav";
import BasicModal from "../../utils/modal/BasicModal";

const ExpensePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MySideNav />
      <BasicModal />
      <h1>ExpensePage</h1>
    </div>
  );
};

export default ExpensePage;
