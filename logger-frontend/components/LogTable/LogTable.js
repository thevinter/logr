import useSWR from "swr";
import Pagination from "./Pagination/Pagination";
import TableElement from "./TableElement/TableElement";
import { useState } from "react";
import TableHeader from "./TableHeader/TableHeader";
import { Spinner } from "@blueprintjs/core";
import LogFilters from "../LogFilters/LogFilters";
import colors from "../../styles/colors.json";

const fetcher = (url) => fetch(url).then((r) => r.json());

const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
};

export default function LogTable({ source }) {
  const [page, setPage] = useState(0);
  const urlSource = useState("");
  const funcSource = useState("");
  const warnLevelSource = useState("");
  const { data } = useSWR(
    `http://localhost:3001/logs?page=${page}&url_source=${urlSource[0]}&func_source=${funcSource[0]}`,
    fetcher
  );

  console.log(data);

  const tableElements = data
    ? data.data.map((element) => (
        <TableElement key={element.id} element={element} />
      ))
    : [];

  const uniqueUrls = data
    ? data.data.map((element) => element.url_source).filter(onlyUnique)
    : [];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: colors.one,
        padding: 30,
      }}
    >
      <LogFilters
        urlSource={urlSource}
        funcSource={funcSource}
        warnLevelSource={warnLevelSource}
      />
      <TableHeader />
      <div style={{ minHeight: 500 }}>
        {!data ? <Spinner intent="primary" /> : tableElements}
      </div>
      <Pagination setPage={setPage} total={data ? data.total / 10 : 0} />
    </div>
  );
}
