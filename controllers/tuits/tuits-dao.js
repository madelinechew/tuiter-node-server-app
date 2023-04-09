import tuitsModel from './tuits-model.js';
export const findTuits = async () => {
    const tuits = await tuitsModel.find();
    return tuits;
}
export const createTuit = async (tuit) => {
    const tuitNew = await tuitsModel.create(tuit);
    return tuitNew; 
}

export const deleteTuit = async (tid) => {
    const tuits = await tuitsModel.deleteOne({_id: tid});
    return tuits; 
}
export const updateTuit = async (tid, tuit) => {
    const tuits = await tuitsModel.updateOne({_id: tid}, {$set: tuit});
    return tuits;
}