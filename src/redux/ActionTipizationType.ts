import {
    followActionType,
    setCurrentPageActionType,
    setTotalUsersCountActionType,
    unFollowActionType,
    UsersToSetActionType
} from "./usersReducer";
import {AddPostActionType, NewMessageBodyType, SendMessageType, UpdateTestActionType} from "./store";


export type ActionTypes =
    AddPostActionType   | UpdateTestActionType  |       // actions of Profile

    NewMessageBodyType  | SendMessageType       |       // actions of Dialogs

    followActionType        | unFollowActionType        |       // actions of UsersContainer
    UsersToSetActionType    | setCurrentPageActionType  | setTotalUsersCountActionType