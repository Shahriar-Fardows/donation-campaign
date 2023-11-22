const getId = () => {
    const allId = localStorage.getItem('all');
    if(allId){
        return JSON.parse(allId)
    }
    return[];
};

const setId = (id) => {
    const oldID = getId();
    const chake = oldID.find(allId => allId === id);
    if(!chake){
        oldID.push(id);
        localStorage.setItem('all', JSON.stringify(oldID))
    }
};

export {getId , setId}