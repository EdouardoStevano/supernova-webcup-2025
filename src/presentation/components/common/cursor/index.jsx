import React from 'react';
import './style.css';
import AnimatedCursor from 'react-animated-cursor';

function cursor() {
    return (
        <div>
            <AnimatedCursor
                innerSize={8}
                outerSize={25}
                color="0, 0, 0, 0.5"
                outerAlpha={1}
                innerScale={1}
                hasBlendMode={true}
                showSystemCursor={false}
                outerStyle={{
                    border: '2px solid #666',
                }}
                innerStyle={{
                    backgroundColor: '#333',
                }}
                outerScale={2}
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link',
                    {
                        target: '.curso',
                        options: {
                            innerSize: 12,
                            outerSize: 12,
                            color: '255, 255, 255',
                            outerAlpha: 0.3,
                            innerScale: 0.7,
                            outerScale: 5,
                        },
                    },
                ]}
            />
        </div>
    );
}

export default cursor;
