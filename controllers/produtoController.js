let ProdutoController = {
  viewForm: (req, res) => {
    return res.render("produto");
  },
  salvarForm: (req, res) => {
    let { nomeProduto, precoProduto } = req.body;
    // res.send('o produto: ' + nomeProduto + ' foi criado com sucesso!')
    //salvar no banco:
    res.redirect("/produtos/sucesso");
  },
  sucesso: (req, res) => {
    res.render("sucesso");
  },
  viewAttForm: (req,res) => {
    let {id} = req.params;
    let produtos = [
        {id: 1, nome: 'Produto X', preco: 10},
        {id: 2, nome: 'Produto Y', preco: 20},
    ]
    res.render('editarProduto', {produto: produtos[id]})
  },
  editar: (req,res) => {
    let { nomeProduto, precoProduto } = req.body;
    res.send('voce editou o produto ' + nomeProduto)
  },
  listarProdutos: (req,res) =>{
    let produtos = [
        {id: 1, nome: 'Produto X', preco: 10},
        {id: 2, nome: 'Produto Y', preco: 20},
    ]
    res.render('listaProdutos', {listaProdutos:produtos})
  },
  deletarProduto: (req, res) => {
      let {id} = req.params

      res.send('estou deletando o produto ' + id)
  }
};

module.exports = ProdutoController;
