import React from "react"

function NotFoundPage () {
  return (
    <article>
      <h1>Ошибка 404</h1>  
      <p>Скорее всего эта страница никогда не существовала, либо стала ненужной и мы её грохнули.</p> 
      <p>Так бывает, не расстраивайтесь. На главной есть ещё страницы, не хуже этой.</p>
      <p>Жаловаться сюда → <a href="mailto:yar+site@usenko.pp.ua?subject=404">yar@usenko.pp.ua</a></p>
    </article>
  )
}

export default NotFoundPage;