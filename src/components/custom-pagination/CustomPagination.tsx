import { useState } from "react";
import CustomCard from "../../components/custom-card/CustomCard";
import ReactPaginate from "react-paginate";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const CustomPagination = ({ list, fetchTeachers }: any) => {
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 7;
  const pageVisited = itemsPerPage * pageNumber;
  const displayItems = list
    .slice(pageVisited, pageVisited + itemsPerPage)
    .map((item: any, index: number) => {
      return (
        <CustomCard
          key={item.id}
          teacher={item}
          index={index + 1}
          fetchTeachers={fetchTeachers}
        />
      );
    });

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  return (
    <div>
      {displayItems}
      <ReactPaginate
        previousLabel={
          <div className="paginator-container">
            <BsArrowLeft />
            <span>Prethodna</span>
          </div>
        }
        nextLabel={
          <div className="paginator-container">
            <span>Sledeca</span>
            <BsArrowRight />
          </div>
        }
        pageCount={Math.ceil(list.length / itemsPerPage)}
        onPageChange={changePage}
        containerClassName={"PaginationBttns"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
      />
    </div>
  );
};

export default CustomPagination;
