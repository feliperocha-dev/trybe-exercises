// Exercício 2 : Utilizando o novo campo idade , conte quantos clientes têm entre 18 e 25 anos.
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
  { $match: { idade: { $gte: 18, $lte: 25 } } },
  { $count: "totalClientes" }
]);
