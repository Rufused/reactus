import './Menu.css'

export default function Menu(props) {
    let {pages, classes} = props
    return (
        <ul>
            {
                pages.map(page => <li  className={classes.join(' ')}>{page}</li>)
            }
        </ul>
    );
}


