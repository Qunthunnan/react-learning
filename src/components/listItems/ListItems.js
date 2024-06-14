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

//