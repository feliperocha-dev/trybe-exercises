const fieldsData = [
  [
    {
      label: 'Nome',
      name: 'name',
      type: 'text',
      length: 40,
    },
    {
      label: 'Email',
      name: 'email',
      type: 'text',
      length: 50,
    },
    {
      label: 'CPF',
      name: 'cpf',
      type: 'text',
      length: 11,
    },
    {
      label: 'Endereço',
      name: 'address',
      type: 'text',
      length: 200,
    },
    {
      label: 'Cidade',
      name: 'city',
      type: 'text',
      length: 28,
    },
    {
      label: 'Estado',
      name: 'state',
      states: ['', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE','PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'],
    },
    {
      label: 'Residência',
      name: 'residence',
      type: 'radio',
      residences: ['Casa', 'Apartamento'],
    },
  ],
  [
    {
      label: 'Resumo do currículo',
      name: 'resume',
      length: 1000,
    },
    {
      label: 'Cargo',
      name: 'job',
      length: 40,
    },
    {
      label: 'Descrição',
      name: 'description',
      length: 500,
    },
  ]  
]


export default fieldsData;