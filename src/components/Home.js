import {
    collection,
    deleteDoc,
    doc,
    getDocs,
    onSnapshot,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import './Home.css';

const Home = () => {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        const postData = collection(db, 'posts');
        getDocs(postData).then((snapShot) => {
            setPostList(
                snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
        });
        onSnapshot(postData, (post) => {
            setPostList(
                post.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
        });
    }, []);

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, 'posts', id));
        // window.location.href = '/';
    };
    return (
        <div className='homePage'>
            {postList.map((post) => {
                return (
                    <div className='postContents' key={post.id}>
                        <div className='postHeader'>
                            <h1>{post.title}</h1>
                        </div>
                        <div className='postTextContainer'>{post.postText}</div>
                        <div className='nameAndDeleteButton'>
                            <h3>@{post.author.username}</h3>
                            {auth.currentUser && (
                                <>
                                    {post.author.id ===
                                        auth.currentUser.uid && (
                                        <button
                                            onClick={() =>
                                                handleDelete(post.id)
                                            }
                                        >
                                            削除
                                        </button>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Home;
