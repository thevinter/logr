import useSWR from "swr";
import Selector from "./Selector/Selector";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function LogFilters({ urlSource, funcSource, warnLevelSource }) {
  const { data: urls } = useSWR("http://localhost:3001/logs/sources", fetcher);
  const { data: functions } = useSWR(
    "http://localhost:3001/logs/functions",
    fetcher
  );
  const { data: levels } = useSWR(
    "http://localhost:3001/logs/warnings",
    fetcher
  );
  const uniqueUrls = urls ? urls.map((element) => element.url_source) : [];
  const uniqueFunctions = functions
    ? functions.map((element) => element.func_source || "None")
    : [];
  const uniqueWarnLevels = levels
    ? levels.map((element) => element.warn_level || "None")
    : [];
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
      }}
    >
      <Selector value={urlSource} items={uniqueUrls} name="URL Source" />
      <Selector
        value={funcSource}
        items={uniqueFunctions}
        name="Function Source"
      />
      <Selector
        value={warnLevelSource}
        items={uniqueWarnLevels}
        name="Warn Level"
      />
    </div>
  );
}
