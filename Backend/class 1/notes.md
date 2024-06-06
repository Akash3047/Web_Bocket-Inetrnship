# Command:
-To Create a file: 'ni file name'
-To Open a file: 'ni file name' or 'ni' to open the last edited file
-To make folder directory -'mkdir foldre name'
-change the path/directory-'cd'
to get back one step-'cd..'

## How to create a backend server:
1. create a new folder for your project and navigate into it using 'cd' command.
2. Initialize a new node.js project using 'npm init -y' command.
3. Install express.js framework using 'npm install express' command.
4. Create a new file named 'server.js' and add the following code to it:
Import necessary modules:
- 'http' module for creating a server.
-'fs' modue for reading and wirting files.
-'express' module for creating a server.
5. create a server usnig 'hhtp.creteServer()' method.
6. Define a port.
7. Use 'server.listen(PORT,()=>consoloe.log('server runnning at ${PORT}'))' method to strat the server on a specific port.
8. Start the server using 'node server.js' command.
