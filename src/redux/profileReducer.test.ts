import {
    addPostActionCreator,
    profileReducer,
    ProfileReducerLocalStateType,
    removeChosenPost,
    setStatusAC
} from "./profileReducer";

let initialState: ProfileReducerLocalStateType = {
    posts: [
        {id: 1, message: 'Hey mate', likesCount: 5},
        {id: 2, message: 'Did you understand what is it props?', likesCount: 100}
    ],
    newPostText: '',
    //profile: null
    profile: {
        userId: 0,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        photos: {
            small: '',
            large: ''
        }
    },
    status: ''
}

test('NEW POST SHOULD BE ADDED', () => {
    let newPostText = 'some new post'
    let action = addPostActionCreator(newPostText)
    let newState = profileReducer(initialState, action)

    expect(newState.posts[0].message).toBe(newPostText)
})


test('NEW STATUS SHOULD BE SET', () => {
    let newStatus = 'Some new status'
    let action = setStatusAC(newStatus)
    let updatedState = profileReducer(initialState, action)

    expect(updatedState.status).toBe(newStatus)
})

test('CHOSEN POST SHOULD BE REMOVED', () => {
    let action = removeChosenPost(1)
    let updatedState = profileReducer(initialState, action)
    expect(updatedState.posts.length).toBe(1)
})