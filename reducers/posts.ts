export default (posts = [], action: any) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
            break;
        case 'CREATE':
            return [...posts, action.payload];
            break;
    
        default:
            return posts;
            break;
    }
}