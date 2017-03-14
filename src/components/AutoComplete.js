/**
 * Created by 75214 on 2017/3/13.
 */
import React from 'react';

class AutoComplete extends React.Component {
    constructor() {
        super();
        this.state = {
            displayValue: '',
            activeItemIndex: -1
        };
    }

    render() {
        const {displayValue, activeItemIndex} = this.state;
        const {value, option}= this.props;
        return (
            <div>
                <input value={value}/>
                {
                    options.length > 0 && (
                        <ul>
                            {
                                options.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            {item.text || item}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    )
                }
            </div>
        )
    }
}
// AutoComplete.propTypes = {
//     value: PropTypes.string.isRequired,
//     options: PropTypes.array.isRequired,
//     onValueChange: PropTypes.func.isRequired
// };

export default AutoComplete;