const snmp= require('snmp-native');


exports.verController= (req,res,next)=>{
    /* 
        Recibimos por el body el siguiente json
        {
            "ip": "192.168.43.151",
            "comunidad": "special",
            "version": "2c",
            "mib": "1.3.6.1.2.1.2"
        }    
    */

    //Recibimos por el body todos estos parametros
    const ip= req.body.ip;
    const comunidad= req.body.comunidad;
    const version= req.body.version;
    const mib= req.body.mib;

    //Creamos la sesion SNMP
    const session= new snmp.Session({
        host: ip,
        port: 161,
        comunity: comunidad
    });

    const oid= mib.split('.');

    console.log(oid);

    session.get({oid: oid}, (error, varbinds)=>{
        if(error){
            res.json({"msg":"Fallo la conexion"});
        }else{
            res.json({"msg": varbinds[0].oid + ' = ' + varbinds[0].value + ' (' + varbinds[0].type + ')'})
        }
    });



};