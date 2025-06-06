const lists = [
  {
    id: 'm54ertdfgcv',
    live: false,
    title: 'Student Aids',
    contributor_id: '-LAEDTAC6HQeWYrV3atG',
    created_at: '2019-03-17T18:35:05.441Z',
    updated_at: '2019-03-17T18:35:05.441Z',
    promise_ids: [
      'CeX1MLvSq7IVx3nI1CgI',
      'U5zwNgRbdu0NZRjFLoBF',
      'o3lyMjqZrCALP6HSUZFS'
    ]
  },
  {
    id: 'ytughjbsdf8t7yiu',
    live: true,
    title: 'Broadband service in Malaysia',
    contributor_id: '-LAEDTAC6HQeWYrV3atG',
    created_at: '2019-03-17T18:35:05.441Z',
    updated_at: '2019-03-17T18:35:05.441Z',
    promise_ids: [
      'XjGLsRtJ9spk5VeBidDl',
      'bGvbmCPqIcpWQIZAp92C'
    ]
  }
]

const politicians = [
  { id: '7TcN9D2JhoYUH1bfS8er', name: 'Politician A', primary_position: 'Prime Minister', profile_image: '' },
  { id: 'sfpBmOhHuPFYVtq4wQbV', name: 'Politician B', primary_position: 'Senior Minister', profile_image: '' },
  { id: 'ATqme0rk0KCw1WNWkksX', name: 'Politician C', primary_position: 'Senior Minister', profile_image: '' },
  { id: 'dx8EJBNxptQjOxBqsXDf', name: 'Politician D', primary_position: 'Senior Minister', profile_image: '' },
  { id: 'DwdDiRSLYEtdqgp7dPOQ', name: 'Politician E', primary_position: 'Education Minister', profile_image: '' },
  { id: 'B2O98SBI6pytDmZSpXr2', name: 'Politician F', primary_position: 'Finance Minister', profile_image: '' },
  { id: 'U7Em33Esl7WgWOHsqJds', name: 'Politician G', primary_position: 'Deputy Finance Minister', profile_image: '' },
  { id: 'xY1T9zSKBAYEGYNutf9a', name: 'Politician H', primary_position: 'Deputy Finance Minister', profile_image: '' },
  { id: '5LOz9AGdZs0VQeBqnEgN', name: 'Politician I', primary_position: 'Health Minister', profile_image: '' },
  { id: 'CTucEvtmE96sahlc9EIP', name: 'Politician J', primary_position: 'Deputy Health Minister', profile_image: '' },
  { id: 'A3VobkDSr49ILv8Jxdts', name: 'Politician K', primary_position: 'Deputy Health Minister', profile_image: '' },
  { id: 'vV2LzNNnJy8QXXct8Bp3', name: 'Politician L', primary_position: 'Deputy Education Minister', profile_image: '' },
  { id: 'MMNBYMZzDOLYIJclnvMI', name: 'Politician M', primary_position: 'Deputy Education Minister', profile_image: '' },
  { id: 'kIIjWY30xdBfXiaFLxPG', name: 'Politician N', primary_position: 'Transport Minister', profile_image: '' },
  { id: 'GQuj9ZKNrtTPZHNRfRR4', name: 'Politician O', primary_position: 'Deputy Transport Minister', profile_image: '' }
]

const promises = [
  {
    id: 'CeX1MLvSq7IVx3nI1CgI',
    politician_id: '7TcN9D2JhoYUH1bfS8er',
    title: 'Increase student aid',
    quote: 'We will increase support for students',
    source_name: 'Manifesto',
    source_url: 'https://example.com/1',
    source_date: '2020-01-01',
    status: 'In Progress',
    category: 'Education'
  },
  {
    id: 'U5zwNgRbdu0NZRjFLoBF',
    politician_id: 'B2O98SBI6pytDmZSpXr2',
    title: 'Lower tuition fees',
    quote: 'University fees will be reduced',
    source_name: 'Manifesto',
    source_url: 'https://example.com/2',
    source_date: '2020-02-01',
    status: 'Not Started',
    category: 'Education'
  },
  {
    id: 'o3lyMjqZrCALP6HSUZFS',
    politician_id: '5LOz9AGdZs0VQeBqnEgN',
    title: 'Improve hospital facilities',
    quote: 'Better equipment for hospitals',
    source_name: 'Campaign Speech',
    source_url: 'https://example.com/3',
    source_date: '2020-03-01',
    status: 'Fulfilled',
    category: 'Health'
  },
  {
    id: 'XjGLsRtJ9spk5VeBidDl',
    politician_id: 'DwdDiRSLYEtdqgp7dPOQ',
    title: 'Provide broadband to rural areas',
    quote: 'Rural areas will get fast internet',
    source_name: 'Press Release',
    source_url: 'https://example.com/4',
    source_date: '2020-04-01',
    status: 'In Progress',
    category: 'Infrastructure'
  },
  {
    id: 'bGvbmCPqIcpWQIZAp92C',
    politician_id: 'kIIjWY30xdBfXiaFLxPG',
    title: 'Reduce public transport fares',
    quote: 'Cheaper fares for commuters',
    source_name: 'Interview',
    source_url: 'https://example.com/5',
    source_date: '2020-05-01',
    status: 'Not Started',
    category: 'Transport'
  }
]

export default {
  lists,
  politicians,
  promises
}
