// Exercício 6 : Ainda nesse pipeline , descubra os 5 estados com mais compras.
db.clientes.aggregate([
  { 
    $addFields: { 
      _id: 0,
      idade: {
        $floor: {
          $multiply: [{
            $subtract: [new Date(), "$dataNascimento"] 
          }, 3.1688738506811E-11] 
        },
      },
    },
  },
  { 
    $lookup: {
      from: "vendas",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "compras",
    },
  },
  { 
    $match: {
      "compras.dataVenda": { $gte: ISODate("2019-06-01"), $lte: ISODate("2020-03-01") },
    },
  },
  { $unwind: "$compras" },
  { $group: { _id: "$endereco.uf", totalVendas: { $sum: 1 } } },
  { $sort: { totalVendas: -1 } },
  { $limit: 5 },
]);
