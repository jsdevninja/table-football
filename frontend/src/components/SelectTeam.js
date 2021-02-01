import React from "react";
import { Select, MenuItem } from "@material-ui/core";

const SelectTeam = ({ items, name, value, onChange, ...props }) => {
  const handleChange = (event) => {
    event.target.name = name;
    onChange(event);
  };

  return (
    <Select value={value} onChange={handleChange} {...props}>
      {items.map((items) => (
        <MenuItem key={items.id} value={items.id}>
          {items.name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectTeam;
