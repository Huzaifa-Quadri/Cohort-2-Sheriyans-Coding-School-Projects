# Process to do routing in React App

1. Install react-router-dom
2. In main.jsx - Import createBrowserRouter from React Router Dom with "npm i react-router-dom"
3. Wrap the <App> with BrowserRouter
4. Make a <Routes> (Collection of all routes)
5. Make a <Route> (Single route)
6. Make Navbar Component as well and add it before in App.jsx
7. In Navbar Use by 'react-router-dom' tag to redirect to any specific route
8. Nestes Routes can be made by writing in this way - path="/product/men"
9. Dynamic Routes can be made by writing this way - path="/product/:id"
10. You can access id by using useParams() hook inside that component you rendered in a Dynamic Route
