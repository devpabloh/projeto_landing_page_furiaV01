import HighlightsOfTheWeek from "../../components/HighlightsOfTheWeek/HighlightsOfTheWeek"

import UpcomingChampionships from "../../components/upcomingChampionships/upcomingChampionships"

import styles from './Home.module.css'

const Home = () => {
    return (
        <main className={styles.containerHome}>
            <HighlightsOfTheWeek/>
            <section>
                <UpcomingChampionships/>
            </section>
        </main>
    )
}

export default Home