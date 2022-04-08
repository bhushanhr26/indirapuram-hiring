import React from 'react';

export default function Button(props) {
  return (
    <div>
        <div>
            <button>
                 {props.label}
            </button>
        </div>
    </div>
  )
}
