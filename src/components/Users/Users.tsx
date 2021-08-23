import React from "react";
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import user from '../../assets/user.png'


export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(el => {

                        //return <span className={ this.props.currentPage === el && s.selectedPage }>{el}</span>

                        return(
                            <span className={ this.props.currentPage === el ? s.selectedPage : ''}
                                  // onClick={() => { this.props.setCurrentPage(el) } }
                                  onClick={(e) => { this.onPageChanged(el) }  }
                            >{ " " + el + " "}</span>
                            // <span className={ this.props.currentPage === el && s.selectedPage }>{el}</span>
                        )
                    })}
                </div>
                {
                    this.props.usersPage.users.map(u => {

                        const ToFollowBtnHandler = () => this.props.follow(u.id)
                        const ToUnFollowBtnHandler = () => this.props.unfollow(u.id)

                        return (
                            <div key={u.id}>

                    <span>
                        <div className={s.photoURL}>
                            <img className={s.photoURLStyle} src={u.photos.small != null ? u.photos : user}/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={ToFollowBtnHandler}>Follow</button>
                                    : <button onClick={ToUnFollowBtnHandler}>Un Follow</button>
                            }
                        </div>
                    </span>
                                <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


