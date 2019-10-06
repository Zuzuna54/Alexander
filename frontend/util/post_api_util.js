export const fetchPost = id => (
    $.ajax({
        url: `/api/posts/${id}`,
        method: 'get'
    })
);

export const fetchPosts = () => (
    $.ajax({
        url: '/api/posts',
        method: 'get'
    })
);

export const createPost = post => (
    $.ajax({
        url: '/api/posts',
        method: 'post',
        data: post,
        contentType: false,
        processData: false
    })
);

export const updatePost = post => (
    $.ajax({
        url: `/api/posts/${post.id}`,
        method: 'patch',
        data: { post: post }
    })
);

export const deletePost = id => (
    $.ajax({
        url: `/api/posts/${id}`,
        method: 'delete'
    })
);