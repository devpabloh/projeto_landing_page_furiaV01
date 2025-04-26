import HighlightsOfTheWeek from "../../components/HighlightsOfTheWeek/HighlightsOfTheWeek"

import UpcomingChampionships from "../../components/upcomingChampionships/upcomingChampionships"

const Home = () => {
    return (
        <main>
            <HighlightsOfTheWeek/>
            <section>
                <UpcomingChampionships/>
            </section>
            
        </main>
    )
}

export default Home