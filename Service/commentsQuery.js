

function getCommentsByIdQuery() {

    const query = `SELECT * FROM project_db.comments  where postId = ?;`;
    return query

}
function deleteCommentQuery() {
    const query = `DELETE FROM project_db.comments where id = ?;`;
    return query

}
function updateCommentQuery() {
    const query = `UPDATE
    project_db.comments
SET
    name = ?,
    body = ?
WHERE
    id = ?`;
    return query;
}
function addCommentQuery(){
    const query = `INSERT INTO project_db.comments(postId,name,email,body) 
    VALUES (?,?,?,?);`;
    return query;
}
export {

    addCommentQuery,getCommentsByIdQuery,updateCommentQuery,deleteCommentQuery

}