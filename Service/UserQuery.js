/*function getUserQuery() {

    const query = `SELECT * FROM db_users.test `;

    return query

}*/

function getUserByIdQuery() {

    const query = `SELECT * FROM project_db.users  where id = ?`;

    return query

}
function addUserQuery(){
    const query = `INSERT INTO project_db.users 
    VALUES ( ?.id, ?.name.,  ?.userName,  ?.email,?.phone, ?.city)`;
    return query
}
export {

    addUserQuery,getUserByIdQuery

}