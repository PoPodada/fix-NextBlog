import styles from "@/styles/header.module.css"
export const Header = () => {
    
    return(
        <header className={styles.header}>
            <h1>PoPoCode</h1>
            <nav>
                <ul>
                    <li><a href="">Profile</a></li>
                    <li><a href="">Article</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
   
}
