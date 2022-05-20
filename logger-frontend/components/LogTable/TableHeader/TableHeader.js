import colors from "../../../styles/colors.json";

export default function TableHeader() {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: colors.two,
        height: 50,
        alignItems: "center",
      }}
    >
      <HeaderCell>Source</HeaderCell>
      <HeaderCell>Function</HeaderCell>
      <HeaderCell>Type</HeaderCell>
      <HeaderCell>Warn Level</HeaderCell>
      <HeaderCell>Time</HeaderCell>
      <HeaderCell flex={5}>Log</HeaderCell>
    </div>
  );
}

const HeaderCell = ({ flex = 1, children }) => {
  return (
    <div
      style={{
        flex,
        textAlign: "center",
        textTransform: "uppercase",
        fontWeight: "600",
      }}
    >
      {children}
    </div>
  );
};
