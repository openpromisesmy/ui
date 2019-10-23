const quizSetting = [{
  'title': 'Fuel Subsidy Checking',
  'description': 'Take this quiz below if you are a BSH recipient to find out how much cash payout you are eligible to receive for fuel next year. For non-BSH recipients, you will receive a special Kad95 to enjoy a discount of 30 sen per litre (limited to 100 litres per month) for cars or 40 litres per month for motorcycles when purchasing RON95 at the petrol station.',
  'result': {
    1: 'You don\'t get fuel subsidy. Take noted that subsidy always reserved for needed person',
    2: 'You qualified to receive RM480 every 4 months, subsidy will automatically transferred into your account.',
    3: 'You qualified to receive RM1200 every 4 months, subsidy will automatically transferred into your account.'
  },
  'questions': [
    // Question 1
    {
      'name': 'Do you own a cars?',
      'description': 'Choose 1 of the following',
      'choices': [
        {
          'title': 'I own up to two cars below 1600cc',
          'value': 3
        },
        {
          'title': 'I own up to two cars above or equal 1600cc, and all of the cars are over 10 years old',
          'value': 3
        },
        {
          'title': 'I own one cars below 1600cc, and another car is above 1600cc which is more than 10 years old',
          'value': 3
        },
        {
          'title': 'I own three or more cars',
          'value': 1
        },
        {
          'title': 'None of them',
          'value': 1
        }
      ]
    },
    // Question 2
    {
      'name': 'Do you own a motorcycles?',
      'description': 'Choose 1 of the following',
      'choices': [
        {
          'title': 'I own up to two motorcycles below 150cc',
          'value': 2
        },
        {
          'title': 'I own up to two motorcycles above or equal 150cc, and all of the motorcycles are over 7 years old',
          'value': 2
        },
        {
          'title': 'I own one motorcycles below 150cc, and another car is above 1600cc which is more than 7 years old',
          'value': 2
        },
        {
          'title': 'I own three or more motorcycles',
          'value': 1
        },
        {
          'title': 'None of them',
          'value': 1
        }
      ]
    }
  ]
}
]

export default quizSetting
