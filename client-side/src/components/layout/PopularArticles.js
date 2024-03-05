import React from 'react';
import { ListGroup } from 'react-bootstrap';

function PopularArticles({ articles }) {
  const article = [
    'id': 'article 1'
    'title': 'Invest Wisely',
    'content': 'dummy text dummy text'
  ]
    
  if (!articles || articles.length === 0) {
    return <p>No articles found.</p>;
  }
  
  return (
    <div>
      <h2>Popular Articles</h2>
      <ListGroup>
        {articles.map((article) => (
          <ListGroup.Item key={article.id}>{article.title}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default PopularArticles;
