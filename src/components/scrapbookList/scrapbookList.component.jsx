import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./scrapbookList.styles.scss";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
					<Card className='book'>
						<CardContent>
							<Typography
								color='textSecondary'
								gutterBottom
							>
								Book #{id}
							</Typography>
							<Typography variant='h5' component='h2'>
								Our Journey
							</Typography>
						</CardContent>
						<CardActions>
							<Button
								size='small'
								onClick={() => history.push(`${match.url}${linkUrl}`)}
							>
								View ScrapBook
							</Button>
						</CardActions>
					</Card>
				))}
			</div>
		);
	}
}

export default withRouter(ScrapBookList);
