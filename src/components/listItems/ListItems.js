import data from './data';
import {useState, useMemo, useTransition} from 'react';

function ListItems() {
    const [text, setText] = useState('');
    const [posts, setPosts] = useState(data);
    const [isPending, setTransition] = useTransition();

    const filteredPosts = useMemo(() => {
            return posts.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
    }, [text]);

    const onValueChange = (e) => {
        setTransition(()=>{ 
            setText(e.target.value);

         });
    }

        
    return ( 
    <>
    <input value={text} type='text' onChange={onValueChange}/> 
    <hr/>
    <div>
        {isPending ? (<p>Loading</p>) : (
        <>
            {filteredPosts.map(post => (
                <div key={post._id}>
                    <h4>{post.name}</h4>
                </div>
            ))}
        </>
            )
        }
    </div>

    </>
   )
}

export default ListItems;

//useTransition useDeferredValue - це хуки, які дозволяють оптимізувати динамічній рендеринг компонентів та розділити - легкузадачу відрендерити зараз, а важку відрендерити пізніше та поки рендериться важка задача - можна отримувати стан рендеру у окрему змінну, для того, щоби відображати завантаження поки компонен не відрерився повністю