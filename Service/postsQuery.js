

function getPostsByIdQuery() {

    const query = `SELECT * FROM project_db.posts  where usersId = ?;`;
    return query

}
function deletePostQuery() {
    const query = `DELETE FROM project_db.posts  where id = ?;`;
    return query
}
function updatePostQuery() {

    const query = `UPDATE
    project_db.posts
SET
    title = ?,
    body = ?
WHERE
    id = ?`;
    return query;

}
function addPostQuery(){
    const query = `INSERT INTO project_db.posts(usersId,title,body) 
    VALUES (?,?,?);`;
    return query;
}
export {

    addPostQuery,getPostsByIdQuery,updatePostQuery,deletePostQuery

}