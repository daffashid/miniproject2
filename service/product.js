const {db} = require('../server/mysql')

async function getProduct(req,res){
   
    const {id} = req.params;

    var sql = "SELECT * FROM product WHERE ?"
    let get = {id:id}
    var result = await db.query(sql,get,function(err,show){
        if(err){
            res.send("Data yang ingin ditampilkan tidak sesuai")
            throw err;
        }
        else {
            var string = JSON.stringify(show)
            console.log(JSON.parse(string));
            res.send(show)
        }
    })
    return result
}

async function createProduct(req,res){

    var {id,name,price,quantity} = req.body

    var sql = "INSERT INTO product SET ?";
    let post = {
        id: id,
        name : name,
        price: price,
        quantity: quantity
    }

    var result = await db.query(sql, post, (err, show) => {
        if(err) throw err;
        else {
        console.log('success');
        res.send("Data berhasil ditambahkan")
        }
       
    }

    );
    return result
}


async function updateProduct(req,res){

    var {id} = req.params;
    var {name,price,quantity} = req.body
    
    var sql = "UPDATE product SET ? WHERE ?"
    let post = {
        name :name,
        price :price,
        quantity: quantity
    }
    let getId = {
        id:id
    }
    var result = await db.query(sql,[post,getId],function(err,show){
        if(name!=null&&price!=null&&quantity!=null){
            res.send("Data berhasil diupdate")
        }
        else if(err){
            res.send("Data gagal diupdate")
            throw err;
        }
        else if(name==null||price==null||quantity==null) {
            res.send("Data tidak lengkap")
        }
    })
    return result
}


async function deleteProduct(req,res){

    const {id} = req.params
    var sql = "DELETE FROM product WHERE ?";
    let getId = {
        id: id
    }
    var result = await db.query(sql,getId,function(err,show){
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

module.exports = {
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
}