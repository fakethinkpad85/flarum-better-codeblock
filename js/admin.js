import app from 'flarum/app';

// No admin functionality needed
app.initializers.add('fakethinkpad85-better-codeblock', () => {
  console.log('Better Code Block extension admin initialized');
}); 