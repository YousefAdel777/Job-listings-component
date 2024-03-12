import React from "react"

export default function Job (props) {
    return (
        <div className={`job ${props.featured && "featured"}`}>
            <div className="logo">
                <img src={`/images/${props.logo}`} alt="Employer logo"/>
            </div>
            <div className="details">
                <div className="employer">
                    <h3>{props.company}</h3>
                    <div className="tags">
                        {props.new && <span className="new-tag">New!</span>}
                        {props.featured && <span className="featured-tag">featured</span>}
                    </div>
                </div>
                <div className="job-title">
                    <h2>{props.position}</h2>
                </div>
                <div className="job-info">
                    <span className="posted-at">{props.postedAt}</span><span className="contract">{props.contract}</span><span className="location">{props.location}</span>
                </div>
            </div>
            <div className="filter-tablets">
                {[props.role].map(role => <span key={role} className="filter-tablet" onClick={() => props.addFilter(role)}>{role}</span>)}
                {[props.level].map(level => <span key={level} className="filter-tablet" onClick={() => props.addFilter(level)}>{level}</span>)}
                {[...props.languages].map(lang => <span key={lang} className="filter-tablet" onClick={() => props.addFilter(lang)}>{lang}</span>)}
                {[...props.tools].map(tool => <span key={tool} className="filter-tablet" onClick={() => props.addFilter(tool)}>{tool}</span>)}
            </div>
        </div>
    )
}