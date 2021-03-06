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

const Plus = ({ extendClass, height, title, width }) => {
	return (
		<SvgContainer width={width || '24px'}
			height={height || '24px'}
			extendClass={extendClass}
			viewBox="0 0 24 24"
		>
			<title>{title}</title>
			<g stroke="none"
				strokeWidth="1"
				fill="none"
				fillRule="evenodd"
			>
				<g transform="translate(-499.000000, -168.000000)">
					<g transform="translate(495.000000, 164.000000)">
						<g transform="translate(4.000000, 4.000000)"
							className="ibp-fill-color"
							fillRule="nonzero"
						>
							<polygon points="13 11 13 0 11 0 11 11 0 11 0 13 11 13 11 24 13 24 13 13 24 13 24 11" />
						</g>
						<g>
							<rect x="0"
								y="0"
								width="32"
								height="32"
							/>
						</g>
					</g>
				</g>
			</g>
		</SvgContainer>
	);
};

Plus.propTypes = {
	extendClass: PropTypes.string,
	height: PropTypes.string,
	title: PropTypes.string,
	width: PropTypes.string,
};

export default Plus;
