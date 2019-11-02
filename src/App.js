import React from 'react';
import Header from './components/Header';
import Pictures from './components/pictures/Pictures';
import Footer from './components/Footer';
import './styles/App.scss';

const App = () => (
	<div className="container-fluid">
		<Header />
		<div className="jumbotron container">
			<h1>Picture Gallery</h1>
			<p>For Four Years, I created a photo gallery of pictures I took which I featured on my front page as "Picture of the Week."  It was a fun project that kept me looking at my portfolio site.  But reaching the Four Year mark, I felt it was necessary to pull the plug and make my portfolio site focused solely on my projects.  With that, I moved the photo gallery to its own page.  Here are the photos from my Picture of the Week gallery.</p>
		</div>
		<Pictures />
		<Footer />
	</div>
);

export default App;
