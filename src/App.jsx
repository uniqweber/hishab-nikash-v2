import { Route, Routes } from "react-router";
import { routes } from "./routes/routes";
const App = () => {
   return (
      <>
         {/* Wrap with Layout */}
         <Routes>
            {routes.map(({ path, Element, id, subRoute }) => (
               <Route key={id} path={path} element={<Element />}>
                  {/* {subRoute &&
                     subRoute.map(({ id, index, path, Element }) => (
                        <Route key={id} {...(index ? { index: true } : { path })} element={<Element />}></Route>
                     ))} */}
               </Route>
            ))}
         </Routes>
         {/* Wrap with Layout */}
      </>
   );
};
export default App;
