
import MainSection from '../components/mainSection'
import styles from '../styles/Home.module.css'

export default function Home({characters}) {
  return (
    <div className={styles.container}>
      <MainSection src={characters} /> 
    </div>
  )
}
export async function getStaticProps(){
   
  const result = await fetch('https://www.breakingbadapi.com/api/characters')
  const characters = await result.json()
 
  return {
      props: {
          characters
      }
  }
}
