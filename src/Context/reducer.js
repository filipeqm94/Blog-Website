const initialState = {
  user: {},
  articles: [],
  article: {}
}

function reducer(state, action) {
  switch (action.type) {
    /*-----ARTICLE ACTIONS-----*/
    case 'GET_ALL_ARTICLES':
      // getArticles();
      return state

    case 'GET_SINGLE_ARTICLE':
      // getSingleArticle(articleId)
      return state

    case 'CREATE_ARTICLE':
      // createArticle(article)
      return state

    case 'EDIT_ARTICLE':
      // editArticle(articleId, newArticle)
      return state

    case 'DELETE_ARTICLE':
      // deleteArticle(articleId)
      return state

    case 'ARTICLE_FEEDBACK':
      // artileFeedback(articleId, feedback)
      return state

    /*-----COMMENT ACTIONS-----*/
    case 'COMMENT_ARTICLE':
      // commentArticle(articleId, comment)
      return state

    case 'COMMENT_FEEDBACK':
      // commentFeedback(commentId, feedback)
      return state

    case 'EDIT_COMMENT':
      // editComment(commentId, newComment)
      return state

    case 'DELETE_COMMENT':
      // deleteComment(commentId)
      return state

    /*-----USER ACTIONS-----*/
    case 'SIGN_IN':
      // signIn(formData)
      return state

    case 'SIGN_UP':
      //signUp(formData)
      return state

    case 'LOG_OUT':
      // logout()
      return state

    default:
      return new Error()
  }
}
