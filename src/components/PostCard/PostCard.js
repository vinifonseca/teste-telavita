import './PostCard.css';
import React from 'react';

const PostCard = ({ post }) => {
	return (
		<div key={post.id} className="post-card">			
			<img src={post?.attributes?.posterImage?.large} alt="anime-card"/>
			<div className="card-content">
				<p className='title'>{post?.attributes?.canonicalTitle}</p>
				<p className='description'>{post?.attributes?.description}</p>	
				<ul>	
					{					
						post?.attributes?.abbreviatedTitles.map((title, idx) => 
							<li key={idx}>{title}</li>	
						)
					}	
				</ul>						
			</div>
		</div>
	);
};

export default PostCard;
