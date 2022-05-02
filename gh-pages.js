import { publish } from 'gh-pages';

publish(
	'docs', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/haguerrerob/intro-section-with-dropdown-navigation.git', // Update to point to your repository
		user: {
			name: 'haguerrerob', // update to use your name
			email: 'haguerrerob@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
