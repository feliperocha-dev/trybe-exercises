/*
Exercício 7 : Descubra o cliente que mais consumiu QUEIJO PRATO . Retorne um documento com a seguinte estrutura:
{
  "nomeCliente": "NOME",
  "uf": "UF DO CLIENTE",
  "totalConsumido": 100
}
*/
db.vendas.aggregate([
  { $match: { "itens.nome": "QUEIJO PRATO" } },
  { $unwind: "$itens" },
  { $match: { "itens.nome": "QUEIJO PRATO" } },
  { $group: { _id: "$clienteId", total: { $sum: "$itens.quantidade" } } },
  { $sort: { total: -1 } },
  { $limit: 1 },
  {
    $lookup:{
      from: "clientes",
      localField: "_id",
      foreignField: "clienteId",
      as: "cliente",
    },
  },
  { $unwind: "$cliente" },
  {
    $project: { 
      _id: 0,
      nomeCliente: "$cliente.nome",
      uf: "$cliente.endereco.uf",
      totalConsumido: "$total",
    },
  },
]);
