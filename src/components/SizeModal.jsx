import React from "react";
import RangeFilterModal from "./RangeFilterModal";

const SizeModal = ({ isOpen, position, handleFilter }) => (
  <RangeFilterModal
    isOpen={isOpen}
    position={position}
    handleFilter={handleFilter}
    minName="minSize"
    maxName="maxSize"
    label="Size"
  />
);

export default SizeModal;
