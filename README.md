<!DOCTYPE html>
<html lang="en">



<body>
    <h1>Habitat (MERN Stack)</h1>
    <h2>Description</h2>
    <p>This is a full-stack real estate website built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to search for properties, view property details, contact agents, and manage listings.</p>
    <h2>Features</h2>
    <ul>
        <li>User authentication and authorization</li>
        <li>Property search functionality</li>
        <li>Property listing and detail pages</li>
        <li>Contact form for reaching out to landlords</li>
        <li>User dashboard for managing listings</li>
    </ul>
    <h2>Installation</h2>
    <p>To run this project locally, follow these steps:</p>
    <ol>
        <li>Clone the repository:</li>
    </ol>
    <pre><code>git clone https://github.com/yourusername/realestate-website.git</code></pre>
    <ol start="2">
        <li>Navigate to the project directory:</li>
    </ol>
    <pre><code>cd realestate-website</code></pre>
    <ol start="3">
        <li>Install server dependencies:</li>
    </ol>
    <pre><code>cd server
npm install</code></pre>
    <ol start="4">
        <li>Install client dependencies:</li>
    </ol>
    <pre><code>cd ../client
npm install</code></pre>
    <ol start="5">
        <li>Start the development server:</li>
    </ol>
    <pre><code>npm start</code></pre>
    <p>The server will start at <a href="http://localhost:3000">http://localhost:3000</a>, and the client will start at <a href="http://localhost:5000">http://localhost:5000</a>.</p>
    <h2>Configuration</h2>
    <p>Before running the application, you need to set up environment variables:</p>
    <ol>
        <li>Create a .env file in the server directory.</li>
        <li>Define the following variables in the .env file:</li>
    </ol>
    <pre><code>PORT=5000
MONGODB_URI=&lt;your_mongodb_uri&gt;
JWT_SECRET=&lt;your_jwt_secret&gt;</code></pre>
    <h2>Usage</h2>
    <p>Once the application is running, you can access it in your web browser at <a href="http://localhost:3000">http://localhost:3000</a>. Register a new account or use the provided credentials to log in. Explore the property listings, search for properties, view details, and contact agents as needed.</p>
    <h2>Contributing</h2>
    <p>Contributions are welcome! Please follow the contribution guidelines to contribute to this project.</p>
    <h2>License</h2>
    <p>This project is licensed under the MIT License - see the LICENSE file for details.</p>
    <h2>Acknowledgements</h2>
    <p>MongoDB<br>Express.js<br>React.js<br>Node.js</p>
</body>

</html>
