import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";


const PAGINATION_PER_PAGE = 5;

function Pagination({ currentPage, totalPages, getNextPage }) {
    const allPages = Array.from({ length: totalPages }, (_, i) => i + 1);
    const startIndex = Math.max(0, currentPage - PAGINATION_PER_PAGE) + 1;
    const lastIndex = Math.min((startIndex + PAGINATION_PER_PAGE) + 2, +totalPages - 1);

    const currentPaginationGroup = allPages.slice(startIndex, lastIndex);

    return (
        <div>
            <div onClick={() => { currentPage > 1 && getNextPage(+currentPage - 1) }}>
                <FaRegArrowAltCircleLeft />
            </div>
            <div key={0} onClick={() => { currentPage !== 1 && getNextPage(1) }}>
                {1}
            </div>
            {currentPage > PAGINATION_PER_PAGE &&
                <div>
                    ...
                </div>    
            }

            {currentPaginationGroup.map(page => {
                return (
                    <div key={page} onClick={() => {currentPage !== page && getNextPage(page) }}>
                        {page}
                    </div>
                )
            })}

            {lastIndex !== totalPages - 1 &&
                <div>
                    ...
                </div>
            }

            {totalPages > 1 &&
                <div key={totalPages} onClick={() => { currentPage !== totalPages && getNextPage(totalPages) }}>
                    {totalPages}
                </div>
            }

            <div onClick={() => { currentPage < totalPages && getNextPage(+currentPage + 1) }}>
                <FaRegArrowAltCircleRight />
            </div>
        </div>
    );
}

export default Pagination;