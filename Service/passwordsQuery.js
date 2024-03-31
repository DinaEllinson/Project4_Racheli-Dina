function getPasswordByUsernameQuery() {

    const query = `SELECT * FROM project_db.passwords  where userName = ?;`;
    return query

}
function addPasswordQuery(){
    const query = `INSERT INTO project_db.passwords(id,userName,password) 
    VALUES (?,?,?);`;
    return query;
}
export {

    getPasswordByUsernameQuery,addPasswordQuery

}