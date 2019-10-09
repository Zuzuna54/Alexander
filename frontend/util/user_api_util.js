export const fetchUser = id => (
    $.ajax({
        url: `/api/users/${id}`,
        method: 'get'
    })
);
export const fetchUsers = () => (
    $.ajax({
        url: `/api/users`,
        method: 'get'
    })
);

export const searchUsers = username => (
    $.ajax({
        url: `/api/search/${username}`,
        method: 'get'
    })
);