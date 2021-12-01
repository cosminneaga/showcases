const form = {
    form: {
        id: 'form-id',
        method: 'post',
        submit: 'someSubmitFunctionality()',
        prevent: false
    },
    fields: [
        {
            type: 'text', 
            label: 'Text\'s field label',
            description: 'Your username goes into this field',
            name: 'text-field',
            id: 'text-id',
            rules: [
                { message: 'Field must not be empty', method: (value) => value !== '' }
            ]
        },
        {
            type: 'password', 
            label: 'Password\'s field label',
            description: 'Your password goes into this field',
            name: 'password-field',
            id: 'password-id',
            rules: [
                { message: 'Field must not be empty', method: (value) => value !== '' },
                { message: 'Password length must be greater than 10 characters', method: (value) => value.length > 10 }
            ]
        },
        {
            type: 'select', 
            label: 'Select\'s field label',
            description: 'Please choose from one of the options',
            name: 'select-field',
            id: 'select-id',
            items: [
              {value: '1', txt: 'option-one'},
              {value: '2', txt: 'option-two'},
              {value: '3', txt: 'option-three'},
            ],
            selectedItem: 2,
            rules: [
                { message: 'Field must not be empty', method: (value) => value !== '' },
            ]
        },
    ]
}
