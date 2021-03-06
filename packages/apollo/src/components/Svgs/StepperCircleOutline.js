/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/
import PropTypes from 'prop-types';
import React from 'react';
import SvgContainer from './SvgContainer';

const StepperCircleOutline = ({ extendClass, height, title, width }) => {
	return (
		<SvgContainer width={width || '18px'}
			height={height || '18px'}
			extendClass={extendClass}
			viewBox="0 0 18 18"
		>
			<title>{title}</title>
			<g id="StepperCircleOutlinePage-1"
				stroke="none"
				strokeWidth="1"
				fill="none"
				fillRule="evenodd"
			>
				<circle id="Oval"
					stroke="#6ea6ff"
					cx="9"
					cy="9"
					r="8"
				/>
			</g>
		</SvgContainer>
	);
};

StepperCircleOutline.propTypes = {
	extendClass: PropTypes.string,
	height: PropTypes.string,
	title: PropTypes.string,
	width: PropTypes.string,
};

export default StepperCircleOutline;
