const initialState = {
    sources: [
        {
            id: 1,
            src: 'photos/ph_1.jpeg'
        },
        {
            id: 2,
            src: 'photos/ph_2.jpeg'
        },
        {
            id: 3,
            src: 'photos/ph_3.jpeg'
        },
        {
            id: 4,
            src: 'photos/ph_4.jpeg'
        },
        {
            id: 5,
            src: 'photos/ph_5.jpeg'
        },
        {
            id: 6,
            src: 'photos/ph_6.jpeg'
        } 
    ]
}

export function feedReducer(state = initialState, action) {
    switch (action.type) {
        default: 
        return state;
    }
}