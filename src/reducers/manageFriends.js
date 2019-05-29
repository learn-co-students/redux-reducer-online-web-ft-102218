export function manageFriends(state, action){
    switch(action.type) {
        case 'ADD_FRIEND':
            return {...state, friends: [...state.friends, action.friend] }
            case 'REMOVE_FRIEND':
                let newFriend = state.friends.filter(friend => friend.id != action.id)
                return {...state, friends: newFriend }
        default:
            return state
    }    
}
