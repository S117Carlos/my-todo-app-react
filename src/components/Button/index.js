import React from 'react';
import classnames from 'classnames';
import styles from './index.scss';

const Button = ({onClick, label, disabled}) => {
    return <button onClick={onClick} className={classnames(styles.btn)}>
            {label || 'Button'}
    </button>
  }

export default Button;