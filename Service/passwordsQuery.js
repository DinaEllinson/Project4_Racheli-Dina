
function addPasswordQuery(){
    const query = `INSERT INTO project_db.passwords(userName,password) 
    VALUES (?,?);`;
    return query;
}

function deletePasswordQuery() {
    const query = `DELETE FROM project_db.passwords  where userName = ?;`;
    return query
}
function updatePasswordQuery() {

    const query = `UPDATE
    project_db.passwords
SET
    password = ?
WHERE
    userName = ?`;
    return query;

}
export {

    addPasswordQuery,updatePasswordQuery,deletePasswordQuery

}