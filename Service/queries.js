
export function getByValueQuery(tableName, value) {
    const query = `SELECT * FROM project_db.${tableName}  where ${value} = ? `;
    return query;
}
export function deleteQuery(tableName, value) {
    const query = `DELETE FROM project_db.${tableName}  where ${value} = ?; `;
    return query;
}

export function addQuery(tableName, itemKeys) {
    let keys = "", QuestionMark = "";
    itemKeys.forEach(element => {
        keys += element + ',';
        QuestionMark += "?,"
    })
    const query = `INSERT INTO project_db.${tableName} (${keys.slice(0, -1)}) VALUES (${QuestionMark.slice(0, -1)})`
    return query
}
export function updateQuery(tableName, itemKeys) {
    let keys = "";
    itemKeys.forEach(element => {
        keys += `${element} = ?,`;
    })
    let primaryKey = 'id'
    //if (tableName == 'auth')
    //    primaryKey = 'userName'
    const query = `UPDATE project_db.${tableName} SET ${keys.slice(0, -1)} WHERE ` + primaryKey + ` = ? `;
    return query
}
export function verifyPasswordQuery(){
    const query = `SELECT true FROM project_db.passwords where userName=? and password=?;`;
    return query;
}

export function getSpecialParamsQuery(itemKeys, query) {
    let addToQuery = ""
    itemKeys.forEach(element => {
        !(typeof query[element] === "undefined") ? addToQuery += (" and " + element + " LIKE '%" + query[element]) + "%'" : ""
    })
    if (query._sort)
        addToQuery = addToQuery + "  ORDER BY " + query._sort
    if (query._limit)
        addToQuery = addToQuery + "  LIMIT " + query._limit
    else if (query._page)
        addToQuery = addToQuery + "  LIMIT " + query._page
    return addToQuery
}
