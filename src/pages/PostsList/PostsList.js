import React, { useState } from 'react';
import PostCard from '../../components/PostCard/PostCard';
import Loader from '../../components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsBySearch, fetchPostsByUrl } from '../../redux/Posts/actions/PostActions';
import Paginate from '../../components/Paginate/Paginate';
import './PostsList.css';
import ButtonComponent from '../../components/Button/ButtonComponent';

const PostsList = () => {

	const dispatch = useDispatch();
	const [search, setSearch] = useState('');
	const { posts, loading, links } = useSelector((state) => state.PostReducers);

	const handleSearch = () => {
		if (search !== '') {
			dispatch(fetchPostsBySearch(search));
		}
	}

	const handlePagination = (e) => {
		switch (e) {
			case 'first':
				dispatch(fetchPostsByUrl(links.first));
				break;
			case 'prev':
				dispatch(fetchPostsByUrl(links.prev));
				break;
			case 'next':
				dispatch(fetchPostsByUrl(links.next));
				break;
			case 'last':
				dispatch(fetchPostsByUrl(links.last));
				break;		
			default:
				break;
		}
	}

	return (
		<>
			<header>
				<div className="title">
					<h1>Teste Telavita</h1>
				</div>
				<form className="search" onSubmit={(e) => {
					e.preventDefault();
					handleSearch();
				}}>
					<input
						type="text"
						value={search}
						placeholder="Search"
						onChange={e => setSearch(e.target.value)}
					/>
					<ButtonComponent 
						text={'Search'}
						disabled={search === ''}
					></ButtonComponent>
				</form>
			</header>
			{loading ? (
				<Loader />
			) : (
				<div className="container">
					<div className="posts-list">
						{posts.map((post, idx) => (							
							<PostCard key={idx} post={post} />			
						))}
					</div>

					{Object.keys(links).length !== 0 && 
						<footer>			
							<Paginate
								handlePagination={handlePagination}
								links={links}
							/>		
						</footer>
					}			
				</div>
			)}	
		</>
	);
};

export default PostsList;
