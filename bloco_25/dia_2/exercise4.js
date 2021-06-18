//Exercício 4 : Selecione TODOS os clientes que compraram entre Junho de 2019 e Março de 2020 .
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
  { $project: { _id: 0, nome: 1 } },
]);
