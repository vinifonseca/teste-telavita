import React from 'react';
import './Paginate.css'

const Paginate = ({handlePagination, links}) => {

	return (
		<div className="wrapper">		
			<ul className="border-pagination">
				{
					links.first && 
					<li>
						<a onClick={() => handlePagination('first')}>« First</a>
					</li>
				}
				{
					links.prev && 
					<li>
						<a onClick={() => handlePagination('prev')}>«Prev</a>
					</li>
				}
				{
					links.next && 
					<li>
						<a onClick={() => handlePagination('next')}>Next »</a>
					</li>
				}
				{
					links.last && 
					<li>
						<a onClick={() => handlePagination('last')}>Last »</a>
					</li>
				}
			</ul> 
		</div>
	);
};

export default Paginate;
