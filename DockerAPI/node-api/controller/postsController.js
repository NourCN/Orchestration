const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const router = express.Router();
const { PostsModel } = require("../models/postsModel");
const ObjectID = require("mongoose").Types.ObjectId;

router.get("/", (req, res) => {
	PostsModel.find((err, docs) => {
		if (!err) res.send(docs);
		else console.log("ERROR TO GET DATA: " + err);
	});
});

//add new post
router.post("/", (req, res) => {
	const newRecord = new PostsModel({
		auteur: req.body.auteur,
		message: req.body.message,
	});
	newRecord.save((err, docs) => {
		if (!err) res.send(docs);
		else console.log("ERROR TO SAVE DATA: " + err);
	});
});
//update with id
router.put("/:id", (req, res) => {
	if (!ObjectID.isValid(req.params.id))
		return res.status(400).send("ID unconnu : " + req.params.id);

	const updateRecord = {
		auteur: req.body.auteur,
		message: req.body.message,
	};
	PostsModel.findByIdAndUpdate(
		req.params.id,
		{ $set: updateRecord },
		{ new: true },
        (err,docs)=>{
            if(!err) res.send(docs);
            else console.log("UPDATE ERROR : " +err);
        }
	);
});

router.delete("/:id", (req, res) => {
	if (!ObjectID.isValid(req.params.id))
		return res.status(400).send("ID unconnu : " + req.params.id);
PostsModel.findByIdAndRemove(
    req.params.id,
    (err,docs)=>{
        if(!err) res.send(docs);
        else console.log("DELETE ERROR : " +err);
    }
)
    });
module.exports = router;
