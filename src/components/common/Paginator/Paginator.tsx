import React, {useState} from "react";
import s from './Paginator.module.css'

export const Paginator = ({
    totalCount,
    pageSize,
    onPageChanged,
    currentPage,
} : {
    totalCount: number
    pageSize: number
    onPageChanged: (page: number) => void
    currentPage: number
}) => {

    let pagesCount = Math.ceil(totalCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionSize = 10

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    return (
        <div className={s.paginator}>
            {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}
            {pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
            .map((el, index) => {
                return (
                    <div key={index}
                          className={currentPage === el ? s.selectedPage : s.notSelected}
                          onClick={(e) => {
                              onPageChanged(el)
                          }}
                    >{" " + el + " "}</div>
                )
            })}
            {portionCount > portionNumber &&
            <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
        </div>
    )
}

