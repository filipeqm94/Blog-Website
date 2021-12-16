import React from 'react'
import './Articles.css'

const articleArray = [
  {
    author: 'Yusef',
    title: 'Title-1',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Facilisi morbi tempus iaculis urna id volutpat lacus. Pellentesque massa placerat duis ultricies lacus sed. Nec nam aliquam sem et tortor consequat id porta. Sem viverra aliquet eget sit amet tellus cras adipiscing. Vitae nunc sed velit dignissim sodales ut eu sem integer. At volutpat diam ut venenatis tellus. Lacus sed viverra tellus in hac habitasse. Sagittis aliquam malesuada bibendum arcu vitae elementum. Aliquam faucibus purus in massa. Purus in massa tempor nec feugiat nisl pretium fusce. Sed augue lacus viverra vitae congue. Ipsum nunc aliquet bibendum enim facilisis gravida neque.',
    likes: {
      positive: 5,
      negative: 1
    }
  },
  {
    author: 'Yusef',
    title: 'Title-2',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Facilisi morbi tempus iaculis urna id volutpat lacus. Pellentesque massa placerat duis ultricies lacus sed. Nec nam aliquam sem et tortor consequat id porta. Sem viverra aliquet eget sit amet tellus cras adipiscing. Vitae nunc sed velit dignissim sodales ut eu sem integer. At volutpat diam ut venenatis tellus. Lacus sed viverra tellus in hac habitasse. Sagittis aliquam malesuada bibendum arcu vitae elementum. Aliquam faucibus purus in massa. Purus in massa tempor nec feugiat nisl pretium fusce. Sed augue lacus viverra vitae congue. Ipsum nunc aliquet bibendum enim facilisis gravida neque.',
    likes: {
      positive: 545434342422,
      negative: 141151
    }
  },
  {
    author: 'Yusef',
    title: 'Title-3',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Facilisi morbi tempus iaculis urna id volutpat lacus. Pellentesque massa placerat duis ultricies lacus sed. Nec nam aliquam sem et tortor consequat id porta. Sem viverra aliquet eget sit amet tellus cras adipiscing. Vitae nunc sed velit dignissim sodales ut eu sem integer. At volutpat diam ut venenatis tellus. Lacus sed viverra tellus in hac habitasse. Sagittis aliquam malesuada bibendum arcu vitae elementum. Aliquam faucibus purus in massa. Purus in massa tempor nec feugiat nisl pretium fusce. Sed augue lacus viverra vitae congue. Ipsum nunc aliquet bibendum enim facilisis gravida neque.',
    likes: {
      positive: 3345,
      negative: 11123215352
    }
  },
  {
    author: 'Yusef',
    title: 'Title-66',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Facilisi morbi tempus iaculis urna id volutpat lacus. Pellentesque massa placerat duis ultricies lacus sed. Nec nam aliquam sem et tortor consequat id porta. Sem viverra aliquet eget sit amet tellus cras adipiscing. Vitae nunc sed velit dignissim sodales ut eu sem integer. At volutpat diam ut venenatis tellus. Lacus sed viverra tellus in hac habitasse. Sagittis aliquam malesuada bibendum arcu vitae elementum. Aliquam faucibus purus in massa. Purus in massa tempor nec feugiat nisl pretium fusce. Sed augue lacus viverra vitae congue. Ipsum nunc aliquet bibendum enim facilisis gravida neque.',
    likes: {
      positive: 3452,
      negative: 65635463
    }
  }
]

export default function Articles() {
  return (
    <section>
      {articleArray.map(article => {
        return (
          <article>
            <h2>{article.title}</h2>
            <small>Author: {article.author}</small>
            <p className="article-text">{article.body}</p>
            <small className="likes-count">
              Likes:{article.likes.positive}
            </small>
            <small className="dislikes-count">
              Dislikes:{article.likes.negative}
            </small>
          </article>
        )
      })}
    </section>
  )
}
