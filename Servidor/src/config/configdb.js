var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

cns = {
    user: "alejandro",
    password: "1234",
    connectString: "172.17.0.2/ORCLCDB"
}

async function Open(sql, binds, autoCommit) {
    let cnn = await oracledb.getConnection(cns);
    let result = await cnn.execute(sql, binds, { autoCommit });
    cnn.release();
    return result;
}

exports.Open = Open;