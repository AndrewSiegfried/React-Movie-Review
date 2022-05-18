import './App.css';
import Movie from './components/movie';
import ReactStars from 'react-stars'
import ReviewList from './components/reviewList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div id='Container'  className='container-fluid'>
      <div className='row'>
        <div className='col'>
    <Movie 
    title = 'Transformers'
    imgSrc={'https://upload.wikimedia.org/wikipedia/en/6/66/Transformers07.jpg'}/>
    <p id='movie2'>Please leave a review!</p>
    <ReviewList/>
    <ReactStars/>
    </div>

    <div className='col'>
    <Movie 
    title = 'Harry Poter' imgSrc='https://upload.wikimedia.org/wikipedia/en/7/7a/Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg'/>
    
    <p id='movie2'>Please leave a review!</p>
    <ReviewList/>
    <ReactStars/>
    </div>
    
    <div className='col'>
    <Movie 
    title = 'Big Daddy' 
    imgSrc='https://m.media-amazon.com/images/I/81pMLxFuRVL._SL1500_.jpg'
    />
    <p id='movie2'>Please leave a review!</p>
    <ReviewList/>
    <ReactStars/>
    </div>

    <div className='col'>
    <Movie 
    title = 'Batman' imgSrc={'https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/The_Batman_%28film%29_poster.jpg/220px-The_Batman_%28film%29_poster.jpg'}/>
    <p id='movie2'>Please leave a review!</p>
    <ReviewList/>
    <ReactStars/>
    </div>

    <div className='col'>
    <Movie 
    title = 'Superman' imgSrc={'https://flxt.tmsimg.com/NowShowing/10286/10286_aa.jpg'}/>
    <p id='movie2'>Please leave a review!</p>
    <ReviewList/>
    <ReactStars/>
    </div>
    </div>
    </div>
    
  )
}

export default App;
