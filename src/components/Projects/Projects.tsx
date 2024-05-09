import { ProjectInfo } from "../../data/project-info"
import Card, { CardType } from "../../shared/Card/Card";
import classes from "./project.module.css"


export default function Projects() {
    const data = ProjectInfo
    return (
        <>
            <section>
                <div className={classes.project_container}>
                    {
                        data.map((item: CardType,index:number) => (
                            <div className={classes.card_wrapper} key={index}>
                                <Card {...item} />
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}