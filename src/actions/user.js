export const changeUserName = ({ userName }) => ({
        type: "CHANGE_USER_NAME", //compulsory key!
        userName
});

export const changeUserStatus = ({ status }) => ({
    type: "CHANGE_USER_STATUS", //compulsory key!
    status
});