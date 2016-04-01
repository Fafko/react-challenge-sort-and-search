import React        from 'react';
import ReactDOM     from 'react-dom';
import superagent   from 'superagent';

import App          from './App';
import Preloader    from './components/Preloader';


ReactDOM.render(<Preloader/>, document.querySelector('#root'));

superagent.get('data.json').end( (err, res) => {
    if(!err){
        ReactDOM.render(<App appData={res.body} />, document.querySelector('#root'));
    }else{
        console.warn('Something went wrong!', err);
    }
});



