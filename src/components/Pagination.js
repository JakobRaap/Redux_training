import React from "react";

export const Pagination = ({ totalItems, itemsPerPage, paginate }) => {
  const pageNumbers = [];
  const calculatedPageNumbers = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= calculatedPageNumbers; i++) {
    pageNumbers.push(i);
  }
  
  return (
    <nav>
      {pageNumbers.map((number) => (
        <a
          href="!#"
          style={{ margin: "4px", fontSize: "30px" }}
          key={number}
          onClick={() => paginate(number)}
        >
          {number}
        </a>
      ))}
    </nav>
  );
};
