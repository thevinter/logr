import LogFilters from "../components/LogFilters/LogFilters";
import LogTable from "../components/LogTable/LogTable";

export default function Logs() {
  return (
    <div
      style={{
        padding: 80,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <LogTable />
    </div>
  );
}
