import React from "react";
import RangeFilterModal from "./RangeFilterModal";

const PriceModal = ({ isOpen, position, handleFilter }) => (
  <RangeFilterModal
    isOpen={isOpen}
    position={position}
    handleFilter={handleFilter}
    minName="minPrice"
    maxName="maxPrice"
    label="Price"
  />
);

export default PriceModal;
