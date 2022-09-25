import { useState } from "react";
import CustomCard from "../../components/custom-card/CustomCard";
import ReactPaginate from "react-paginate";

const CustomPagination = ({ list }: any) => {
  const [items, setItems] = useState(list);

  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 10;
  const pageVisited = itemsPerPage * pageNumber;
  const displayItems = items
    .slice(pageVisited, pageVisited + itemsPerPage)
    .map((item: any) => {
      return <CustomCard key={item.id} teacher={item} />;
    });

  const changePage = ({ selected }: any) => {
    console.log(selected, "SELEKTOVANI")
    setPageNumber(selected);
  };

  return (
    <div>
      {displayItems}
      <ReactPaginate
        previousLabel={"Prethodna"}
        nextLabel={"Sledeca"}
        pageCount={2}
        onPageChange={changePage}
        containerClassName={"PaginationBttns"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
      />
    </div>
  );
};

export default CustomPagination;
