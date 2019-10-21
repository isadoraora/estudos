exports.post = (req, res, next) => {
    res.status(200).send('Requisicao recebida');
};
exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Recebida com sucesso ${id}`);
};
exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso ${id}`);
};