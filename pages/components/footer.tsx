import styles from "@/styles/footer.module.css"
import Image from "next/image";


export const Footer = () => {

    return (
        <footer className={styles.footer}>

            <section>
                <div>

                    <h2>PoPoCode</h2>
                    <p>&copy; 2024 PoPo</p>
                </div>
                <div>
                    <nav>
                        <li><a href="">Profile</a></li>
                        <li><a href="">Article</a></li>
                        <li><a href="">Contact</a></li>
                    </nav>
                </div>

            </section>

            <ul>
                <li><a> <Image src="/github.svg" alt="aaa" width={50} height={50} priority/></a></li>{/* github */}
                <li><a href="https://twitter.com/PButabara"><Image src="/x.jpg" alt="aaa" width={50} height={50} priority/></a></li>{/* X */}
            </ul>


        </footer>
    );

}
