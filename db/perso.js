const db= require ("./db")
const helper = require ("../src/helper.js");
const require ("../config.json")

async function getMultiple (page=1){
    const offset = helper.getOffset (page, nom.listePerPage);
    const rows = await db.query ('SELECT * FROM MOB');
    const data = helper.emptOrRows (rows);
    const meta = {page};

    return {
        data,
        meta
    };
}

module.exports = {
    getMultiple,
};