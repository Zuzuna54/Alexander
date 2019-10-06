export const createComment = comment => (
    $.ajax({
        url: '/api/comments',
        method: 'post',
        data: { comment: comment }
    })
)

export const destroyComment = id => (
    $.ajax({
        url: `/api/comments/${id}`,
        method: 'delete'
    })
)
