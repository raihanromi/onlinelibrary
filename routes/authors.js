const express =require("express")
const router =express.Router()

//All Authors Route

router.get("/", async (req, res) => {
  res.render("authors/index");
});

//New Author Route
router.get("/new", async (req, res) => {
  res.render("authors/new");
});

//Create Author Route
router.post("/", async (req, res) => {
  res.send("Create");
});

module.exports=router