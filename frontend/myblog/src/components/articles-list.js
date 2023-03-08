import {Link} from 'react-router-dom';
const ArticleList = ({articles}) => {
    return (
         <>
                {articles.map( articles => (
            <Link key={articles.name} className="article-list-item" to ={`/articles/${ articles.name}`}>
                <h3>{articles.title}</h3>
                <p>{articles.content[0].substring(1,150)}...</p>

            </Link>
      )  )} 
         </>
    );
}
export default ArticleList;