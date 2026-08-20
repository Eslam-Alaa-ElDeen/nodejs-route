const express = require("express");
const server = express();
const fs = require("node:fs");
const path = require("node:path");
const port = 3000;
server.use(express.json());

function readData() {
  let data = fs.readFileSync(path.resolve("./data.json"), "utf-8");
  return JSON.parse(data);
}

function writeData(newData) {
  fs.writeFileSync(path.resolve("./data.json"), JSON.stringify(newData));
}

server.get("/", (req, res) => {
  res.status(200).json({ msg: "welcome to my server" });
});

server.post("/user", (req, res) => {
  let data = readData();
  let bodyData = req.body;
  const ExistEmail = data.find((ele) => {
    return ele.email == bodyData.email;
  });

  if (ExistEmail) {
    return res.status(409).json({ msg: "email already exists." });
  }

  data.push(bodyData);
  writeData(data);
  res.status(201).json({ msg: "user add successfully." });
});

server.patch("/user/:id", (req, res) => {
  let data = readData();
  let { name, age, email } = req.body;
  let { id } = req.params;
  const ExistID = data.findIndex((ele) => {
    return ele.id == id;
  });

  if (ExistID == -1) {
    return res.status(404).json({ msg: "user id not found." });
  }

  let keys = [];

  if (name) {
    data[ExistID].name = name;
    keys.push("name");
  }
  if (age) {
    data[ExistID].age = age;
    keys.push("age");
  }
  if (email) {
    data[ExistID].email = email;
    keys.push("email");
  }
  writeData(data);
  res.status(200).json({ msg: `user ${keys} updated successfully` });
});

server.get("/user/getByName", (req, res) => {
  let data = readData();
  let { name } = req.query;
  const ExistName = data.findIndex((ele) => {
    return ele.name == name;
  });

  if (ExistName == -1) {
    return res.status(404).json({ msg: "user name not found." });
  }
  res.status(200).json(data[ExistName]);
});

server.get("/user", (req, res) => {
  let data = readData();
  res.status(200).json(data);
});

server.get("/user/filter", (req, res) => {
  let data = readData();
  let { minAge } = req.query;
  minAge = Number(minAge);
  const filterData = data.filter((ele) => {
    return ele.age >= minAge;
  });

  if (filterData.length == 0) {
    return res.status(404).json({ msg: "no user found." });
  }
  res.status(200).json(filterData);
});

server.get("/user/:id", (req, res) => {
  let data = readData();
  let { id } = req.params;
  const ExistID = data.findIndex((ele) => {
    return ele.id == id;
  });

  if (ExistID == -1) {
    return res.status(404).json({ msg: "user id not found." });
  }
  res.status(200).json(data[ExistID]);
});

server.delete("/user/{:id}", (req, res) => {
  let data = readData();
  let { id } = req.params;
  let dataBody = req.body;

  if (!id && !dataBody.id) {
    return res.status(404).json({
      msg: "user id is required.",
    });
  }
  function removeid(id) {
    const ExistID = data.findIndex((ele) => {
      return ele.id == id;
    });

    if (ExistID == -1) {
      return res.status(404).json({ msg: "user id not found." });
    }

    data.splice(ExistID, 1);
    writeData(data);
    res.status(200).json({ msg: "user deleted successfully" });
  }

  if (id) {
    removeid(id);
  } else {
    removeid(dataBody.id);
  }
});

server.all("/*dem", (req, res) => {
  res.status(404).json({ msg: "unvalid URL" });
});

server.listen(port, () => {
  console.log("server is runnig at port", port);
});
