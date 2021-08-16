import Stats from "./Stats"
import "./Text.css"

const Text = () => {
    return(
        <div>
            <h1 id = "heading">Get <span>Insights</span> that help your business grow.</h1>
            <p>Discover the benefits of data analytics and make better decisions regarding revenue, 
                customer experience, and overall efficiency
            </p>

            <div className = "stats">
                <Stats number = "10k" type = "Companies"/>
                <Stats number = "314" type = "Companies"/>
                <Stats number = "12M" type = "Companies"/>
            </div>

        </div>
    )
}

export default Text