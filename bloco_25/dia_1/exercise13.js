/* 
Exercício 13 : Encontre qual foi o total de vendas e a média de vendas de cada uf no ano de 2019 . Ordene os resultados pelo nome da uf . Retorne os documentos no seguinte formato:
{
  "uf": "MG",
  "mediaVendas": 9407.129225352113,
  "totalVendas": 142
}
*/
db.vendas.aggregate([
  { 
    $match: {
      dataVenda: { $gte: ISODate("2019-01-01"), $lte: ISODate("2019-12-31") },
    },
  },
  { 
    $lookup: {
      from: "clientes",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "clienteData",
    },
  },
  { $unwind: "$clienteData" },
  { $group:
    {
      _id: "$clienteData.endereco.uf",
      mediaVendas: { $avg: "$valorTotal" },
      totalVendas: { $sum: 1 },
    }
  },
  { $project:
    {
      _id: 0,
      uf: "$_id",
      mediaVendas: "$mediaVendas",
      totalVendas: "$totalVendas",
    }
  },
  { $sort: { uf: 1 } },
]);
