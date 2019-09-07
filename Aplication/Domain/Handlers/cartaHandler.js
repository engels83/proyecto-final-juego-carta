//el objetivo de los handlers es manipular la data crear, editar, elimnar

//1. Crear una clase que agrupe todads las funciones hanclers

class cartaHandler{
    //traer una lista de items
    static async list(){
        const cartas = await this.find();
        return {cartas};
    }

// 2. agrupar un item a la base de datos

static async add(signo, valor, imagen, color){
    const result = await this.create({signo, valor, imagen, color});
    return result;
}

//3. editar un carta de la bd
/*static async edit(id, signo, valor, imagen, color){

}*/
}

module.exports = cartaHandler;