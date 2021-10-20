import React from "react";
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

    return (
        <div>
            {pages.map((el, index) => {
                return (
                    <span key={index}
                          className={currentPage === el ? s.selectedPage : ''}
                          onClick={(e) => {
                              onPageChanged(el)
                          }}
                    >{" " + el + " "}</span>
                )
            })}
        </div>
    )
}

