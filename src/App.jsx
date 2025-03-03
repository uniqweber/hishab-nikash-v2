import { Route, Routes } from 'react-router';
import { routes } from './routes/routes';

const App = () => {
  return (
    <>
      <Routes>
        {routes.map(({ path, id, Element }) => (
          <Route key={id} path={path} element={<Element />}>
            {/* {subRoute &&
                     subRoute.map(({ id, index, path, Element }) => (
                        <Route key={id} {...(index ? { index: true } : { path })} element={<Element />}></Route>
                        ))} */}
          </Route>
        ))}
      </Routes>
    </>
  );
};
export default App;
