const {db} = require('../server/mysql')

async function createAccount(req,res){
    
    var {id,password,name,address,phone_number} = req.body

    try{
        var sql = "INSERT INTO account SET ?";

        let post ={
            id:id,
            password:password,
            name:name,
            address:address,
            phone_number:phone_number
        }

        var result = await db.query(sql,post,function(err,show){
            if(err){
                res.send("Data yang dibuat tidak sesuai")
                throw err;
            }
            else {
                res.send("Data berhasil dibuat")
            }
        }
        )
        return result
    }

    catch{
        res.status(500).send("Error ")
    }
}


async function deleteAccount(req,res){
   
    const {id} = req.params;
    var sql = "DELETE FROM account WHERE ?";
    let getDelete = {
        id:id
    }
    var result = await db.query(sql,getDelete,function(err,show){
        if(err){
            res.send("Data yang ingin dihapus tidak sesuai")
            throw err;
        }
        else {
            res.send("Data berhasil dihapus")
        }
    })
    return result
}

module.exports={
    createAccount,
    deleteAccount,
}