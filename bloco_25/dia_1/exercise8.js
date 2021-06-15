// Exercício 8 : Descubra quais são os 5 clientes que gastaram o maior valor.
db.clientes.aggregate([
  {
    $lookup: {
      from: "vendas",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "compras",
    }
  },
  { $unwind: "$compras" },
  { $group: { _id: {nome: "$nome"}, totalGastos: { $sum: "$compras.valorTotal" } } },
  { $project: { _id: 0, nome: "$_id.nome", totalGastos: "$totalGastos" } },
  { $sort: { totalGastos: -1 } },
  { $limit: 5 },
]);
