const http = require("node:http");
const fs = require("node:fs");
const port = 3000;

const server = http.createServer((req, res) => {
  try {
    const { url, method } = req;

    if (url === "/home" && method === "GET") {
      //   const x = 9
      //   x =7
      res.statusCode = 200;
      res.write("Hello World");
      res.end();
    } else if (url === "/about" && method === "POST") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.write(
        JSON.stringify({
          message: "About Page",
        }),
      );
      res.end();
    } else if (url === "/users" && method === "GET") {
      const users = JSON.parse(fs.readFileSync("data.json", "utf-8"));
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(users));
      res.end();
    } else if (url === "/users" && method === "POST") {
      let data;
      req.on("data", (chunk) => {
        data = JSON.parse(chunk);
      });
      req.on("end", () => {
        const { name, email, age } = data;

        const users = JSON.parse(fs.readFileSync("data.json", "utf-8"));

        const isUserExists = users.find((user) => user.email === email);
        if (isUserExists)
          return res.end("User Already Exists please enter another email");

        const newUser = {
          id: users.length + 1,
          name,
          email,
          age,
          is_active: true,
        };

        users.push(newUser);
        fs.writeFileSync("data.json", JSON.stringify(users));

        res.statusCode = 201;
        res.end(`User ${name} added successfully`);
      });
    } else if (url === "/users" && method === "DELETE") {
      let data;
      req.on("data", (chunk) => {
        data = JSON.parse(chunk);
      });
      req.on("end", () => {
        const { email } = data;

        const users = JSON.parse(fs.readFileSync("data.json", "utf-8"));

        const filteredUsers = users.filter((user) => user.email !== email);

        fs.writeFileSync("data.json", JSON.stringify(filteredUsers));

        res.statusCode = 200;
        res.end(`User ${email} deleted successfully`);
      });
    } else if (url == "/users" && method == "PUT") {
      let data;
      req.on("data", (chunk) => {
        data = JSON.parse(chunk);
      });
      req.on("end", () => {
        const { email, name, age, is_active, id } = data;

        // Read users
        const users = JSON.parse(fs.readFileSync("data.json", "utf-8"));

        // Get user index
        const userIndex = users.findIndex((user) => user.id === id);
        if (userIndex < 0) return res.end("User Not Found");

        // Update user
        if (name) users[userIndex].name = name;
        if (age) users[userIndex].age = age;
        if (is_active) users[userIndex].is_active = is_active;
        if (email) {
          const isUserExists = users.find((user) => user.email === email);
          if (isUserExists)
            return res.end("User Already Exists please enter another email");
          users[userIndex].email = email;
        }

        // Save updated user
        fs.writeFileSync("data.json", JSON.stringify(users));

        // Response
        res.statusCode = 200;
        res.end(`User ${email} Updated successfully`);
      });
    } else {
      res.statusCode = 404;
      res.end("Page Not Found");
    }
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});



const fs = require('fs')

//= Readable Stream =//
const readable = fs.createReadStream('myfile.txt', {
    encoding: 'utf-8', // will convert the buffer to string
    start: 10, // will start reading the file from the 10th byte
    end: 100,  // will stop reading the file at the 100th byte
    autoClose: true, // if it true, will close the stream automatically when it finishes reading the file
    highWaterMark: 100, // will read 100 bytes at a time
    emitClose: true // if it true, will emit the close event when the stream is destroyed
})
// highWaterMark: 100 means that the stream will read 100 bytes at a time
readable.setEncoding('utf-8') // will convert the buffer to string
readable.pause()   // will pause the stream and will not start reading the file until we call .resume() method
console.log(readable.isPaused()); // will return true if the stream is paused
readable.resume(); // to start reading the file
readable.destroy() // will close the stream immediately and will not emit the close event untill the emitClose option is set to true
readable.destroy(new Error('Stream destroyed by the user')) // will emit the error event with the message 'Stream destroyed by the user'

//=========================== Events ===========================//
readable
    .on('data', (chunk) => {
        // this chunk is a buffer because streams read data in binary format so we need to convert it to string
        console.log(chunk.toString());
    })
    .on('end', () => {
        console.log('Finished reading the file');
    }).on('error', (err) => {
        // try to change the file name to get here
        console.error('Error reading the file:', err);
    })
    .on('close', () => {
        console.log('Stream closed');
    })
    .on('open', () => {
        console.log('Stream opened');
    }).on('ready', () => {
        console.log('Stream ready');
    }).on('pause', () => {
        console.log('Stream paused');
    }).on('resume', () => {
        console.log('Stream resumed');
    })
    
// readStream.destroy(new Error('destroy error'))

let count = 0
readStream
    .on('data', (chunk) => {
        console.log('==================== Data ===================');
        // console.log(`chunk : ${chunk/}`);
        if(count < 1) {
            readStream.pause()
            setTimeout(() => {
                count++
                readStream.resume()
            }, 2000)
        }
    }).on('end', () => {
        console.log('==================== end ===================');
    }).on('error', (err) => {
        console.log('==================== Error ===================');
    }).on('close', () => {
        console.log('==================== close ===================');
    }).on('pause', () => {
        console.log('==================== pause ===================');
    }).on('resume', () => {
        console.log('==================== resume ===================');
    }).on('open', () => {
        console.log('==================== open ===================');        
    }).on('ready', () => {
        console.log('==================== ready ===================');
    })


//=========================== Example to pause and resume ===========================//
let chunkCount = 0
readable.on('data', (chunk) => {
    if (chunkCount === 2) {
        readable.pause(); // will pause the stream after reading the first chunk
        console.log('Stream paused');
        setTimeout(() => {
            readable.resume(); // will resume the stream after 3 seconds
            console.log('Stream resumed');
        }, 3000);
    }
    console.log('New Chunk:', chunk.toString());
    chunkCount++
})

/**
 * Events Priority:
 * 1. resume
 * 2. open
 * 3. ready
 * 4. data
 * 5. end
 * 6. error
 * 7. close
 */