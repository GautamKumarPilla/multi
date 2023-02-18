const initialState = {
    todos:[
        {
            title: 'Jog',
            status:true
        },
        {
            title: 'Run',
            status:true
        },
        {
            title: 'Trek',
            status:true
        },
        {
            title: 'Yoga',
            status:false
        },
        {
            title: 'Swim',
            status:false
        },
        {
            title: 'Gym',
            status:true
        }
    ]
}
function todoReducer(state=initialState,action){
    if(action.type==='ADDTODO'){
        return{...state,todos:[state.todos,{...action.payload}]}
    }
    return {...state}
}
export default todoReducer;