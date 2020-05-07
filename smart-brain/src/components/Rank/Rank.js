import React, { useEffect, useState } from 'react';

const Rank = ({ name, entries }) => {
  const [emojis, setEmojis] = useState('')
  const generateEmoji = entries => {
    fetch(`https://insxg0hj7h.execute-api.ap-southeast-1.amazonaws.com/dev/rank?rank=${entries}`)
      .then(response => response.json())
      .then(data => setEmojis(data.input))
      .catch(console.log)
  }

  useEffect(() => {
    generateEmoji(entries)
  }, [entries])

  return (
    <div>
      <div className='white f3'>
        {`${name}, your current entry count is...`}
      </div>
      <div className='white f1'>
        {entries}
      </div>
      <div className='white f3'>
        {`Rank Badget: ${emojis}`}
      </div>
    </div>
  );
}

export default Rank;