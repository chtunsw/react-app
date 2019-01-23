// 
const user = (state = { userName:'choose one', status:'logged out' }, action) => {
    switch (action.type) {
        case "CHANGE_USER_NAME":
        return {
            ...state,
            userName: action.userName
        }
        case "CHANGE_USER_STATUS":
        return {
            ...state,
            status: action.status
        }
        default:
        return state;
    }
};
export default user;