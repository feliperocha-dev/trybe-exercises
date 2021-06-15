// Exercício 9 : Descubra quais são os 10 clientes que gastaram o maior valor no ano de 2019 .
db.vendas.aggregate([
  { $match: { dataVenda: { $gte: ISODate("2019-01-01"), $lte: ISODate("2019-12-31") } } },
  {
    $lookup: {
      from: "clientes",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "cliente",
    }
  },
  { $group: { _id: { nome: "$cliente.nome"}, totalGastos: { $sum: "$valorTotal" } } },
  { $project: { _id: 0, nome: "$_id.nome", totalGastos: "$totalGastos" } },
  { $sort: { totalGastos: -1 } },
  { $limit: 10 },
]);
