import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { setAlert } from './actions/alert';
import PropTypes from 'prop-types';
import BookHeading from './components/BookHeading';
import './App.css';
import { Typography, Card } from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, makeStyles } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles({
	loading: {
		margin: '0 auto',
		textAlign: 'center',
	},
	container: {
		width: '100%',
		maxWidth: '160rem',
		margin: '2rem auto',
		background: '#000000',
		padding: '2rem',
	},
	header: {
		textAlign: 'center',
		marginBottom: '2rem',
	},
	bookContainer: {
		background: '#3e0266',
		border: 0,
		borderRadius: 3,
		color: 'white',
		padding: '2rem',
		marginBottom: '2rem',
	},
	bookDetails: {
		listStyle: 'none',
		marginTop: '2rem',
	},
});

const App = ({ setAlert, alerts }) => {
	useEffect(() => {
		setAlert();
	}, []);

	const classes = useStyles();

	return (
		<Fragment>
			<ThemeProvider theme={theme}>
				<div className={classes.container}>
					<header className={classes.header}>
						<BookHeading />
					</header>
					<main>
						<div>
							{alerts.loading ? (
								<div className={classes.loading}>
									<div className="loader-ring">
										<div className="loader-ring-light"></div>
										<div className="loader-ring-track"></div>
									</div>
								</div>
							) : (
								<div>
									{alerts.data.data.books.map((book) => (
										<Card color="text.primary" key={book.id} className={classes.bookContainer}>
											<Typography variant="h2">{book.book_title}</Typography>
											<ul className={classes.bookDetails}>
												<li>Author: {book.book_author}</li>
												<li>Year: {book.book_publication_year}</li>
												<li>Country: {book.book_publication_country}</li>
												<li>City: {book.book_publication_city}</li>
												<li>Pages: {book.book_pages}</li>
											</ul>
										</Card>
									))}
								</div>
							)}
						</div>
					</main>
				</div>
			</ThemeProvider>
		</Fragment>
	);
};

App.propTypes = {
	setAlert: PropTypes.func.isRequired,
	alerts: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	alerts: state.alert,
});

export default connect(mapStateToProps, { setAlert })(App);
