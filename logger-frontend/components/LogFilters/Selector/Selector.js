import { Button, MenuItem } from "@blueprintjs/core";
import { Select } from "@blueprintjs/select";
import styles from "./Selector.module.css";
import { useState } from "react";

export default function Selector({ value, items, name = "Missing Name" }) {
  const [getValue, setValue] = value;
  return (
    <div
      className={styles.logElement}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        paddingBottom: 15,
      }}
    >
      <div style={{ paddingLeft: 10 }}>{name}</div>
      <Select
        items={items}
        itemRenderer={itemRenderer}
        itemPredicate={itemPredicate}
        onItemSelect={setValue}
        noResults={<MenuItem disabled={true} text="No results." />}
      >
        {/* children become the popover target; render value here */}
        <Button
          style={{
            minWidth: "14rem",
            justifyContent: "space-between",
          }}
          text={getValue === "" ? "Seleziona Un Elemento" : getValue}
          rightIcon="double-caret-vertical"
        />
      </Select>
    </div>
  );
}

const itemRenderer = (film, { handleClick, modifiers, query }) => {
  if (!modifiers.matchesPredicate) {
    return null;
  }
  const text = film;
  return (
    <MenuItem
      active={modifiers.active}
      disabled={modifiers.disabled}
      onClick={handleClick}
      text={highlightText(text, query)}
    />
  );
};

function highlightText(text, query) {
  let lastIndex = 0;
  const words = query
    .split(/\s+/)
    .filter((word) => word.length > 0)
    .map(escapeRegExpChars);
  if (words.length === 0) {
    return [text];
  }
  const regexp = new RegExp(words.join("|"), "gi");
  const tokens = [];
  while (true) {
    const match = regexp.exec(text);
    if (!match) {
      break;
    }
    const length = match[0].length;
    const before = text.slice(lastIndex, regexp.lastIndex - length);
    if (before.length > 0) {
      tokens.push(before);
    }
    lastIndex = regexp.lastIndex;
    tokens.push(<strong key={lastIndex}>{match[0]}</strong>);
  }
  const rest = text.slice(lastIndex);
  if (rest.length > 0) {
    tokens.push(rest);
  }
  return tokens;
}

function escapeRegExpChars(text) {
  return text.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

export const itemPredicate = (query, element) => {
  const x = element?.toLowerCase().indexOf(query.toLowerCase());
  console.log(x);
  return x >= 0;
};
