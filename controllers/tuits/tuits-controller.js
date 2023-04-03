import posts from "./tuits.js";
let tuits = posts;

const currentUser = {

};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "dislikes": 0,
    "comments": 0
}

const createTuit = (req, res) => {
  const newTuit = req.body;
  newTuit._id = parseInt((new Date()).getTime()+'');
  newTuit.userName = "NASA";
  newTuit.handleName = "nasa";
  newTuit.image = "nasa.jpg";
  newTuit.topic = "Space";
  newTuit.time = "2h";
  newTuit.liked = false;
  newTuit.disliked = false;
  newTuit.replies = 0;
  newTuit.retuits = 0;
  newTuit.likes = 0;
  newTuit.dislikes = 0;
  newTuit.comments = 0
  tuits.push(newTuit);
  res.json(newTuit);
}
  
const findTuits = (req, res) =>
  res.json(tuits);

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
      (t) => t._id === tuitdIdToUpdate)
    tuits[tuitIndex] = 
      {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
  }
  

const deleteTuit = (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  tuits = tuits.filter((t) =>
    t._id !== tuitdIdToDelete);
  res.sendStatus(200);
}


export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}
