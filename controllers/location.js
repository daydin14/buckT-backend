const express =require("express");
const router = express.Router();
const Location = require('../models/location');

// Index
router.get("/location", async (req,res) => {
    try {
        res.json(await Location.find({}));
    } catch (error) {
        console.log("error:", error);
        res.json({ error: "Something Went Wrong - Check Console" });
    }
});

// Create

router.post('/location', async (req, res) => {
  try {
    res.json(await Location.create(req, body))
  } catch (error) {
    console.log('error', error)
    res.json({error: 'someething went wrong - check console'})
  }
})

// Update
router.put('/location/:id', async (req, res) => {
  try{
    res.json(await Location.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    ))
  } catch (error) {
    console.log('error', error)
    res.json({error: 'someething went wrong - check console'})
  }
})

// Delete
app.delete('/locaiton/:id', async (req, res) => {
  try{
    res.json(await Location.findByIdAndDelete(req.params.id))
  } catch (error) {
    console.log('error', error)
    res.json({error: 'someething went wrong - check console'})
  }
})

// listener
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))


module.exports = activityRouter;