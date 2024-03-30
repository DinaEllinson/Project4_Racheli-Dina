/*function getUserQuery() {

    const query = `SELECT * FROM db_users.test `;

    return query

}*/

function getUserByIdQuery() {

    const query = `SELECT * FROM project_db.users  where id = ?;`;
    return query

}
function addUserQuery(){
    const query = `INSERT INTO project_db.users(id,name,userName,phone,email,city) 
    VALUES (?,?,?,?,?,?);`;
    return query;
}
export {

    addUserQuery,getUserByIdQuery

}