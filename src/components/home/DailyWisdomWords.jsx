import React, {useState} from 'react'
import SectionCard from 'components/shared/SectionCard'
import 'assets/scss/home/quotes.scss'

function DailyWisdomWords() {
  const [quotes, setQuotes] = useState([
    {
      id: 1,
      text: 'There are way easier places to work, but nobody ever changed the world on 40 hours a week.',
      author: 'Elon Musk'
    },
    {
      id: 2,
      text: `Your time is limited, so don't waste it living someone else's life.`,
      author: 'Steve Jobs'
    },
    {
      id: 3,
      text: 'Persistence is very important. You should not give up unless you are forced to give up.',
      author: 'Elon Musk'
    },
    {
      id: 4,
      text: `You can’t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future.`,
      author: 'Steve Jobs'
    },
    {
      id: 5,
      text: `Be a yardstick of quality. Some people aren’t used to an environment where excellence is expected.`,
      author: 'Steve Jobs'
    },
    {
      id: 6,
      text: 'Persistence is very important. You should not give up unless you are forced to give up.',
      author: 'Elon Musk'
    },
    {
      id: 7,
      text: `You can’t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future.`,
      author: 'Steve Jobs'
    },
    {
      id: 8,
      text: `Be a yardstick of quality. Some people aren’t used to an environment where excellence is expected.`,
      author: 'Steve Jobs'
    }
  ])

  return (
    <div className="quotes">
      <SectionCard title="Today's Wisdom Words" classes={['pe-0 py-0']}>
        <div className="items py-4 pe-4">
          {quotes.map(quote => (
            <figure key={quote.id} className="">
              <blockquote className="blockquote">
                <p>{quote.text}</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                {quote.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </SectionCard>
    </div>
  )
}

export default DailyWisdomWords