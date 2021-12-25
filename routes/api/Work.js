const express = require("express"),
  router = express.Router(),
  Project = require("../../models/Project");

router.get("/", (req, res) => {
  Project.find()
    .then((projects) => {
      if (!projects) {
        errors.noprofile = "There are no profiles";
        return res.status(404).json(errors);
      }
      res.json(projects);
    })
    .catch((err) => res.status(404).json({ msg: "There are no profiles" }));
});

module.exports = router;
