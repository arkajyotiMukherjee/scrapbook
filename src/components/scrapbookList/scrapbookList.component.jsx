import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import './scrapbookList.styles.scss'

class ScrapBookList extends Component {
	constructor() {
		super();
		this.state = {
			books: [
				{
					id: 1,
					bookname: `Arko's Scrapbook`,
					linkUrl: "book1"
				}
			]
		};
	}
	render() {
		const history = this.props.history;
		const match = this.props.match;

		return (
			<div>
				<h1>ScrapBookList</h1>
				{this.state.books.map(({ id, bookname, linkUrl }) => (
					<div
						key={id}
						className='book'
						onClick={() => history.push(`${match.url}${linkUrl}`)}
					>
						{bookname}
					</div>
				))}
			</div>
		);
	}
}

export default withRouter(ScrapBookList);
