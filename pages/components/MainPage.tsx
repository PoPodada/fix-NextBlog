
export const MainPage = () => {
    
    return(
        <>
        {articles.map(article =>(
            <li key={article.id}>{article.title}</li>
        ))}
        </>
    );
   
}

export async function getServerSideProps(){
    const res = await fetch("http://localhost:3000/api/NotionArticle");
    const articles = await res.json();
    return{
        props:{
            articles
        }
    }
}

