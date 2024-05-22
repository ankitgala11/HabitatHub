<!DOCTYPE html>
<html lang="en">



<body>
     <div>
     <h1>Habitat (MERN Stack)</h1>
     <a href="https://habitathub.onrender.com/" target="_blank" rel="noopener noreferrer">Visit HabitatHub</a>
          <div/>
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
    <pre><code>git clone https://github.com/ankitgala11/HabitatHub.git</code></pre>
    <ol start="2">
        <li>Navigate to the project directory:</li>
    </ol>
    <pre><code>cd HabitatHub</code></pre>
    <ol start="3">
        <li>Install server dependencies:</li>
    </ol>
    <pre><code>npm install</code></pre>
    <ol start="4">
        <li>Install client dependencies:</li>
    </ol>
    <pre><code>cd client
npm install</code></pre>
    <ol start="5">
        <li>Start the development server in api & client:</li>
    </ol>
    <pre><code>npm run dev</code></pre>
    <p>The server will start at <a href="http://localhost:3000">http://localhost:3000</a>, and the client will start at <a href="http://localhost:5173">http://localhost:5173</a>.</p>
    <h2>Configuration</h2>
    <p>Before running the application, you need to set up environment variables:</p>
    <p>For server:</p>
    <ol>
        <li>Create a .env file in the root directory.</li>
        <li>Define the following variables in the .env file:</li>
    </ol>
    <pre><code>MONGO_URI=&lt;your_mongodb_uri&gt;
JWT_SECRET=&lt;your_jwt_secret&gt;</code></pre>
    <p>For client:</p>
    <ol>
        <li>Create a .env file in the client directory.</li>
        <li>Define the following variables in the .env file:</li>
    </ol>
    <pre><code>VITE_FIREBASE_API_KEY=&lt;your_firebase_api_key&gt;</code></pre>
    <h2>Usage</h2>
    <p>Once the application is running, you can explore the property listings, search for properties, view details, and contact landlords as needed.</p>
    <h2>Contributing</h2>
    <p>Contributions are welcome! Please follow the contribution guidelines to contribute to this project.</p>
    <h2>Acknowledgements</h2>
    <p>MongoDB<br>Express.js<br>React.js<br>Node.js</p>
</body>

</html>
