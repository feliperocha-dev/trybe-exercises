// Exercício 3 : Remova os estágios $count e $match do exercício anterior e adicione um estágio no pipeline que coloque as compras do cliente no campo compras .
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
      as: "Compras",
    },
  },
]);
