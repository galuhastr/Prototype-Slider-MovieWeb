import React, { useEffect, useState } from "react"
import "../style/PageControl.css"

const pagesToDisplay = 5, pageCount = 10;

export const Pagination = () => {
    const [pages, setpages] = useState([]);
    const [page, setPage] = useState();

    const buildPagination = (pageIndex: number) => {
        setPage(pageIndex);

        let newPages = [],
            start = 0,
            end = pagesToDisplay;

        if (pageIndex > (pagesToDisplay - 1) / 2) {
            start = pageIndex - (pagesToDisplay - 1) / 2;
            end = start + pagesToDisplay;
        }

        if (pageIndex > pageCount -
            (pagesToDisplay + 1) / 2) {
                start = pageCount - pagesToDisplay;
                end = pageCount;
        }

        for (let i = start; i < end; i++) {
            newPages.push(i);
        }

        setpages(newPages);
    }

    useEffect(() => {
        buildPagination(0);
    }, []);

    return (
        <div className="pagination">
            <button
            disabled={page ===0}
            onClick={() => buildPagination(0)}
            className="material-symbols-outlined"
            type="button"
            >
                first_page
            </button>
            {pages.map((p: number) => (
                <button
                className={p === page ? "active" : ""}
                onClick={() => buildPagination(p)}
                key={p}
                type="button"
                >
                    {p + 1}
                </button>
            ))}
            <button
            disabled={page === pageCount - 1}
            onClick={() => buildPagination(pageCount - 1)}
            className="material-symbols-outlined"
            type="button">
                last_page
            </button>
        </div>
    );
};