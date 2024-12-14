import {createBrowserRouter} from 'react-router-dom';
import Home from '../Pages/Home'
import ToDoList from '../Pages/ToDOList';
import App from '../App';

const router = createBrowserRouter([{
    path:"/",
    element:<App />,
    children:[
        {
            path:"",    
            element:<Home />
        },
        {
            path:"todo",
            element:<ToDoList />
        }
    ]
}])


export default router