import React from 'react';

function PercentageStat({ label, score = 5, total = Math.max(1, score) }) {
  return (
    <div>
      <h6>{ label }</h6>
      <span className="function mt-4 d-inline-block w-100">{ Math.round(score / total * 100) }%</span>
    </div>
  )
}

export default PercentageStat;