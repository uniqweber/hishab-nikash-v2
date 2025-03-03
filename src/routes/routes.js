import NotFound from '../components/shared/NotFound';
import Dashboard from '@/dashboard/Dashboard';

export const routes = [
  { id: 2, path: '/', Element: Dashboard },
  //    {
  //       id: 2,
  //       path: "",
  //       Element: "",
  //       subRoute: [
  //          { id: 6, index: true, Element: "" },
  //          { id: 6, path: "", Element: "" },
  //          {
  //             id: 7,
  //             path: "",
  //             Element: "",
  //             childrenSubRoute: [
  //                { id: 8, index: true, Element: "" },
  //                { id: 9, path: "", Element: "" },
  //             ],
  //          },
  //       ],
  //    },
  { id: 15, path: '*', Element: NotFound },
];
