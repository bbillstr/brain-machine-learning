import React from 'react';
import './ImageLinkForm.css'


const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className='f3'>
				{'I can detact faces using the latest in machine learning technology.  Give it a try - submit an image URL below!'}
			</p>

			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
    				<input className='f4 pa2 w-70 center' type = 'text' onChange={onInputChange}/>
  					<button className ='w-30 grow f4 link ph3 pv2 white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
				</div>
			</div>
		</div>
		);
	
}

export default ImageLinkForm