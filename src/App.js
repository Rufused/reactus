import Menu from './components/menu/Menu.js'
import Users from "./components/users/Users";


export default function App() {
    return (

        <div className="App">
            <Menu
                pages={['user page', 'component page', 'posts page']}
                classes={['target','xxx']}
            />
            <Users/>
            <Menu
                pages={['about','team']}
                classes={['asd','target']}
            />

        </div>
    );
}


