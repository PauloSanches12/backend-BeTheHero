const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if(!ong){ //se não existir
            return response.status(400).json({error: "Nenhuma ONG encontrada com esse ID"});
        }
        return response.json(ong)
    }
};